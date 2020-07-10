import React from 'react';
import ReactDom from 'react-dom';
import { Image } from '@source/component/image.component';
import { ListItem } from '@source/component/list.component';
import {
    LanguageSelectDropdownWrapper,
    LanguageSelectWrapper,
} from '@source/component/form/language-select.component.styles';

export interface DropdownProps {
    value?: string;
    options?: string[];
    size?: string;
    onSelect?: (value: string) => void;
}

export const LanguageSelect: React.FC<DropdownProps> = (props) => {
    const dropdownRef = React.useRef<HTMLDivElement>();

    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);

    React.useEffect(() => {
        if (!isDropdownMenuOpen) {
            return;
        }

        const closeMenu = () => setIsDropdownMenuOpen(false);

        document.addEventListener('click', closeMenu);
        document.addEventListener('scroll', closeMenu);
        document.addEventListener('resize', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
            document.removeEventListener('scroll', closeMenu);
            document.removeEventListener('resize', closeMenu);
        };
    }, [isDropdownMenuOpen]);

    const toggleMenu = () => setIsDropdownMenuOpen((prevState) => !prevState);

    return (
        <LanguageSelectWrapper
            ref={dropdownRef}
            className="dropdown"
            onClick={toggleMenu}
        >
            <Image
                width={props.size}
                height={props.size}
                src={`public/icon/flag/${props.value}.svg`}
            />
            {isDropdownMenuOpen && (
                <LanguageSelectDropdown
                    value={props.value}
                    dropdownEl={dropdownRef.current}
                    options={props.options}
                    size={props.size}
                    onSelect={props.onSelect}
                />
            )}
        </LanguageSelectWrapper>
    );
};

LanguageSelect.defaultProps = {
    size: '24rem',
};

interface DropdownMenuProps {
    value: string;
    dropdownEl: HTMLElement;
    options: string[];
    size: string;
    onSelect: (value: string) => void;
}

const LanguageSelectDropdown: React.FC<DropdownMenuProps> = (props) => {
    const mountEl = React.useMemo(() => {
        const div = document.createElement('div');
        document.body.append(div);
        return div;
    }, []);

    const [dropdownMenuStyles, setDropdownMenuStyles] = React.useState({
        top: 0,
        left: 0,
    });

    React.useEffect(() => () => mountEl.remove(), []);

    React.useEffect(() => {
        if (!props.dropdownEl) {
            return;
        }

        const setOffset = () => {
            const dropdownRect = props.dropdownEl.getBoundingClientRect();

            setDropdownMenuStyles({
                top: dropdownRect.top + pageYOffset,
                left: dropdownRect.left + pageXOffset,
            });
        };

        setOffset();

        document.addEventListener('scroll', setOffset);
        document.addEventListener('resize', setOffset);
        return () => {
            document.removeEventListener('scroll', setOffset);
            document.removeEventListener('resize', setOffset);
        };
    }, [props.dropdownEl]);

    const compareOptions = (prev: string, next: string) => {
        if (prev === props.value) {
            return -1;
        }
        if (next === props.value) {
            return 1;
        }
        return 0;
    };

    const content = (
        <LanguageSelectDropdownWrapper
            top={dropdownMenuStyles.top}
            left={dropdownMenuStyles.left}
        >
            {props.options.sort(compareOptions).map((option) => (
                <ListItem key={option} onClick={() => props.onSelect?.(option)}>
                    <Image
                        width={props.size}
                        height={props.size}
                        src={`public/icon/flag/${option}.svg`}
                    />
                </ListItem>
            ))}
        </LanguageSelectDropdownWrapper>
    );

    return ReactDom.createPortal(content, mountEl);
};

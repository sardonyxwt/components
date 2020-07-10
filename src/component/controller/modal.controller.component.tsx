import React from 'react';
import { createUniqueIdGenerator } from '@sardonyxwt/utils';
import { MODAL_ANIMATION_TIME } from '@source/component/layout/modal.component.styles';

type ModalControllerState = {
    modals: Record<
        string,
        {
            isOpen: boolean;
            modal: React.ReactNode;
        }
    >;
};

export const ModalContext = React.createContext<{
    id: string;
    isOpen: boolean;
}>(null);

export class ModalController extends React.Component<
    unknown,
    ModalControllerState
> {
    private static instance: ModalController;
    private static idGenerator = createUniqueIdGenerator('ModalId');

    constructor(props: unknown) {
        super(props);
        ModalController.instance = this;
        this.state = {
            modals: {},
        };
    }

    public static open(modal: React.ReactNode): string {
        const { idGenerator, instance } = ModalController;
        const { modals } = instance.state;
        const modalId = idGenerator();
        modals[modalId] = { modal, isOpen: false };
        instance.setState({ modals });
        requestAnimationFrame(() => {
            modals[modalId] = { modal, isOpen: true };
            instance.setState({ modals });
        });
        return modalId;
    }

    public static close(modalId: string): void {
        const { instance } = ModalController;
        const { modals } = instance.state;
        const { modal } = modals[modalId];
        modals[modalId] = { modal, isOpen: false };
        instance.setState({ modals });
        setTimeout(() => {
            delete modals[modalId];
            instance.setState({ modals });
        }, MODAL_ANIMATION_TIME);
    }

    render(): React.ReactNode {
        const { modals } = this.state;
        return Object.keys(modals).map((id) => {
            const { modal, isOpen } = modals[id];
            return (
                <ModalContext.Provider key={id} value={{ id, isOpen }}>
                    {modal}
                </ModalContext.Provider>
            );
        });
    }
}

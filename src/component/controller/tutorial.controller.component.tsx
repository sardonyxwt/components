import React from 'react';
import { TutorialCaseOverlay } from '@source/component/controller/tutorial.controller.component.styles';
import { Tooltip } from '@source/component/tooltip.component';
import { FlowAroundDirection } from '@source/hook/flow-around.hook';

type TutorialCase = {
    el: string | (() => Element);
    content: React.ReactElement;
};

type TutorialControllerState = {
    tutorialEl?: HTMLElement;
    tutorialContent?: React.ReactElement;
    tutorialCases: TutorialCase[];
};

export class TutorialController extends React.Component<
    unknown,
    TutorialControllerState
> {
    private static instance: TutorialController;
    private revertElStyles?: () => void;

    constructor(props: unknown) {
        super(props);
        TutorialController.instance = this;
        this.state = {
            tutorialCases: [],
        };
    }

    public static run(tutorialCases: TutorialCase[]): void {
        TutorialController.instance.setState({ tutorialCases }, () => {
            TutorialController.instance.nextTutorialCase();
        });
    }

    private nextTutorialCase() {
        const tutorialCases = this.state.tutorialCases.slice();
        if (tutorialCases.length > 0) {
            const nextTutorialCase = tutorialCases.shift() as TutorialCase;

            const tutorialEl =
                typeof nextTutorialCase.el === 'function'
                    ? (nextTutorialCase.el() as HTMLElement)
                    : (document.querySelector(
                          nextTutorialCase.el,
                      ) as HTMLElement);

            const tutorialContent = nextTutorialCase.content;

            if (!tutorialEl || !tutorialContent) {
                // If component not ready we wait 1s and try show tutorial hint again.
                setTimeout(() => this.nextTutorialCase(), 1000);
                return;
            }

            this.tutorialChangeElProcessing(tutorialEl);

            this.setState({
                tutorialEl,
                tutorialCases,
                tutorialContent,
            });

            return;
        }
        this.setState({
            tutorialEl: undefined,
            tutorialContent: undefined,
        });
    }

    private tutorialChangeElProcessing(tutorialEl: HTMLElement) {
        this.revertElStyles?.();
        const savedZIndex = tutorialEl.style.zIndex;
        tutorialEl.style.zIndex = '1000';

        if (!tutorialEl.style.position) {
            tutorialEl.style.position = 'relative';
        }

        tutorialEl.scrollIntoView({
            block: 'center',
            inline: 'center',
        });

        this.revertElStyles = () => (tutorialEl.style.zIndex = savedZIndex);
    }

    render(): React.ReactNode {
        const { tutorialEl, tutorialContent } = this.state;

        if (!tutorialEl || !tutorialContent) {
            return null;
        }

        return (
            <>
                <TutorialCaseOverlay />
                <Tooltip
                    bindEl={tutorialEl}
                    direction={FlowAroundDirection.Bottom}
                    isForcedOpen
                    onClose={() => this.nextTutorialCase()}
                >
                    {tutorialContent}
                </Tooltip>
            </>
        );
    }
}

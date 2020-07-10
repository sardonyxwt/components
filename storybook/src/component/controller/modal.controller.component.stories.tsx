import React from 'react';
import { lorem } from 'faker';
import {
    Modal,
    ModalActions,
    ModalContent,
    ModalToolbar,
    Text,
    TextFontSize,
    Button,
    ModalController,
} from '@source';

export default {
    title: '@controller/ModalController',
};

const paragraphs = lorem
    .paragraphs(3, ',')
    .split(',')
    .map((paragraph, i) => <span key={i}>{paragraph}</span>);

type ModalStoryProps = {
    isFullscreen?: boolean;
};

function ModalStory({ isFullscreen }: ModalStoryProps) {
    const openModal = () => {
        const modalId = ModalController.open(
            <Modal
                isFullscreen={isFullscreen}
                onHide={() => ModalController.close(modalId)}
            >
                <ModalToolbar
                    title="Modal title"
                    useFullTransparentBackground
                    onClose={() => ModalController.close(modalId)}
                />
                <ModalContent>
                    <Text>{paragraphs}</Text>
                </ModalContent>
                <ModalActions>
                    <Button onClick={() => ModalController.close(modalId)}>
                        <Text fontSize={TextFontSize.L}>Close Modal</Text>
                    </Button>
                </ModalActions>
            </Modal>,
        );
    };

    return (
        <Button onClick={openModal}>
            <Text fontSize={TextFontSize.L}>Open Modal</Text>
        </Button>
    );
}

export const modal = (): React.ReactNode => <ModalStory />;
export const fullscreenModal = (): React.ReactNode => (
    <ModalStory isFullscreen />
);

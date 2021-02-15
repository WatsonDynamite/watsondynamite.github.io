import React from 'react';
import { Dialog } from '@material-ui/core';

interface props {
    cardChildren: React.ReactNode;
};

interface state {
    isModalOpen: boolean;
}

const initialState = {
    isModalOpen: false,
}

export default class ProjectModal extends React.Component<props, state> {
    state = initialState;

    modalToggle = () => {
        const { isModalOpen } = this.state;

        this.setState({
            isModalOpen: !isModalOpen,
        });
    }

    render() {
        const { isModalOpen } = this.state;
        const { cardChildren, children } = this.props;

        return (
            <div className="project-modal">
                <div className="project-modal__card" onClick={this.modalToggle}>
                    { cardChildren }
                </div>
                <Dialog
                    style={{ maxWidth: 'unset'}}
                    open={isModalOpen}
                    onClose={this.modalToggle}
                    maxWidth = {'md'}
                    fullWidth={true}
                >
                        { children }
                </Dialog>
            </div>
        )
    }

}
import React, { useState } from 'react';
import logo from './logo.svg';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Keyword } from './component/Keyword';
import { ChatBalloon } from './component/ChatBalloon';

let keywords = [
    'Laptop',
    'Desktop',
    'Men’s Shoes',
    'Women’s Shoes',
    'Ex1',
    'Ex2',
    'Ex3',
    'Ex4',
    'Ex5',
    'Ex6',
    'Ex7',
    'Ex8',
];

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="App">
            <div className="App-bg">
                <div className="logo" />
                <div className="mainCamera-container">
                    <div className="row">
                        <div className="col-sm-5 camera-bg" />
                        <div className="col-sm-7">
                            <p className="mx-5 mt-5 mb-3">
                                <h3 className="mainMessage">Finding Your Perfect Camera</h3>
                            </p>
                            <p className="mx-5 mt-2 mb-2">
                                <h5 className="subMessage">
                                    Loren ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                                </h5>
                            </p>
                            <p className="mx-5 mt-4 mb-2 text-left">
                                <div
                                    className="button main-button"
                                    onClick={() => openModal()}
                                >
                                    SHOP NOW
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mx-0 px-0">
                    <div className="col-sm-4 text-center feature">
                        <div className="logo-wrapper m-2 text-center">
                            <div className="logo-shipping" />
                        </div>
                        <p className="inShort m-2">FREE SHIPPING</p>
                        <p className="description m-1">
                            Loren ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
                            iaculis quam. Integer accumsan tincidunt fringilla.
                        </p>
                    </div>
                    <div className="col-sm-4 text-center feature">
                        <div className="logo-wrapper m-2 text-center">
                            <div className="logo-return" />
                        </div>
                        <p className="inShort m-2">FREE RETURNS</p>
                        <p className="description m-1">
                            Loren ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
                            iaculis quam. Integer accumsan tincidunt fringilla.
                        </p>
                    </div>
                    <div className="col-sm-4 text-center feature">
                        <div className="logo-wrapper m-2 text-center">
                            <div className="logo-support" />
                        </div>
                        <p className="inShort m-2">CUSTOMER SUPPORT</p>
                        <p className="description m-1">
                            Loren ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
                            iaculis quam. Integer accumsan tincidunt fringilla.
                        </p>
                    </div>
                </div>
                <div className="row my-5">
                    &nbsp;
                </div>
            </div>
            {/*<div className="App-overlay" />*/}
            {showModal && (
                <div
                    className="App-container"
                    // onClick={() => !showModal && alert('쇼핑 기능 준비 중')}
                >
                    <div>
                        {/*<div*/}
                        {/*    className={classNames('keyword-box', { 'display-none': showModal })}*/}
                        {/*    onClick={e => e.stopPropagation()}*/}
                        {/*>*/}
                        {/*    {keywords.map(e => (*/}
                        {/*        <Keyword key={e} text={e} onClick={() => openModal()} />*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                        <Modal
                            size="lg"
                            show={showModal}
                            onHide={() => closeModal()}
                            aria-labelledby="example-modal-sizes-title-lg"
                            onClick={(e: any) => e.stopPropagation()}
                            animation={false}
                        >
                            <Modal.Body>
                                <div className="avatar-image" />
                                <div className="chat-container">
                                    <ChatBalloon
                                        isSystem
                                        chat={{
                                            author: 'SYSTEM',
                                            text: 'HI. Alex, an automated chat-bot, ' +
                                                'will be with you shortly to assist you.',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Alex',
                                            text:
                                                'Hi! I’m Alex, an automated chat-bot. I’m happy to help you with your purchase.',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Alex',
                                            text:
                                                'Is this purchase for you or is this a gift?',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={true}
                                        chat={{
                                            author: 'Me',
                                            text: 'This is for a gift',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Okay, so, you’d like to buy a camera for a gift. I’d be glad to help you find a camera.',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'What type of camera are you looking for? Are you looking for a DSLR, a compact digital camera, or a point-and-shoot camera?',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{ author: 'Andy', imageUri: '/image/notebooks1.png' }}
                                    />
                                    <ChatBalloon
                                        isFromMe={true}
                                        chat={{
                                            author: 'Me',
                                            text: 'um.. left one',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Okay, so you are looking for a point-and-shoot camera as a gift. Okay, let me ask another question',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Which brand do you prefer? We have “xx”, “cc”, and “dd” brands',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={true}
                                        chat={{
                                            author: 'Me',
                                            text: 'I prefer “xx”.',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Okay, Great choice!',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'What is your price range? Over $1700? Or Below $1700?',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={true}
                                        chat={{
                                            author: 'Me',
                                            text: 'Less than $1700',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Okay, you’d like to buy a Canon point-and-shoot digital camera ',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Please give me a moment, and I’ll look for the best digital camera for you',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Based on your preferences, I’ve located the best digital camera. Please see the following details about the digital camera.',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'We at Digital World hope you’ll like this recommendation and that our advice will help you make an informed decision about which camera best fits your needs.',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={false}
                                        chat={{
                                            author: 'Andy',
                                            text: 'Thank you!',
                                        }}
                                    />
                                    <ChatBalloon
                                        isFromMe={true}
                                        chat={{
                                            author: 'Me',
                                            text: 'Thank you :)',
                                        }}
                                    />
                                </div>
                            </Modal.Body>
                            <div className="chat-input-box">
                                <input />
                                <div className="search-btn">
                                    <div className="search-icon" />
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;

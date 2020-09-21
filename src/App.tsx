import React, { useState, useCallback, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import { ChatBalloon } from './component/ChatBalloon';
import { conversations } from './data/converstaion';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// @ts-ignore
import Loader from 'react-loader-spinner';
import classNames from 'classnames';
import _ from 'lodash'

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

const INTERVAL_TIME = 3100;

const App: React.FC = () => {
    const inputEl = useRef(null);
    const chatContainerEl = useRef(null);
    const chatContainerBottomEl = useRef(null);
    const [conversation, setConversation] = useState([] as any);
    const [disableInput, setDisableInput] = useState(false);
    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (!disableInput && inputEl && inputEl.current) {
            (inputEl.current as any).focus();
        }
    }, [inputEl, disableInput]);
    const openModal = useCallback(() => {
        setTimeout(() => {
            setDisableInput(true);
            conversations[0].forEach((c, i) => {
                setTimeout(() => {
                    setConversation(conversations[0].slice(0, i + 1));
                    scrollToBottom();
                    if (i === conversations[0].length - 1) {
                        setDisableInput(false);
                    }
                }, i * INTERVAL_TIME);
            });
        }, 300);
        setShowModal(true);
    }, []);
    const closeModal = useCallback(() => setShowModal(false), []);
    const scrollToBottom = () => {
        setTimeout(
            () => (chatContainerBottomEl.current as any).scrollIntoView({ behavior: 'smooth' }),
            500,
        );
    };
    const sendMessage = useCallback(() => {
        const value: string = (inputEl && inputEl.current && (inputEl.current as any).value) as any;
        if (!value) {
            return;
        }

        try {
            setDisableInput(true);
            (inputEl.current as any).value = '';

            if (value.toLowerCase() === 'sony' || value.toLowerCase() === 'nikon' || value.toLowerCase() === 'canon') {
                localStorage.setItem('camera/brand', value);
            }
            const number = parseInt(value.replace(/\D/g,''), 10);
            if (value.includes('below') || value.includes('under') || (number < 1700 && number > 100)) {
                localStorage.setItem('camera/price', 'below');
            }
            if (value.includes('over') || (number > 1700 && number < 99999999)) {
                localStorage.setItem('camera/price', 'over');
            }

            const conversationWithMine = conversation.concat({ author: 'Me', text: value });
            setConversation(conversationWithMine);
            scrollToBottom();
            setTimeout(() => {
                let currentConversation = conversationWithMine;
                if (!conversations[step + 1]) {
                    setDisableInput(false);
                    scrollToBottom();
                    return;
                }

                conversations[step + 1].forEach((m, i) => {
                    setTimeout(() => {
                        const c = conversations[step + 1]
                          .slice(0, i + 1)
                          .map(e => {
                              e.text = e.text.replace('*camera/brand*', _.upperFirst(localStorage.getItem('camera/brand') || ''));
                              return e;
                          });
                        setConversation(
                            currentConversation.concat(c),
                        );
                        scrollToBottom();
                        if (i === conversations[step + 1].length - 1) {
                            setDisableInput(false);
                        }
                    }, i * INTERVAL_TIME);
                });
                setStep(step + 1);
                scrollToBottom();
            }, INTERVAL_TIME);
        } catch (err) {
            console.error(err);
            setDisableInput(false);
        }
    }, [step, conversation, inputEl]);

    return (
        <div className="App">
            <div className="App-bg">
                <div className="logo" />
                <div className="mainCamera-container">
                    <div className="row">
                        <div className="col-sm-5 camera-bg" />
                        <div className="col-sm-7">
                            <div className="mx-5 mt-5 mb-3">
                                <h3 className="mainMessage">Find Your Perfect Camera</h3>
                            </div>
                            <div className="mx-5 mt-2 mb-2">
                                <h5 className="subMessage">
                                    Start counseling with our AI agent Alex for great
                                    recommendations on digital cameras, from point and shoot to
                                    DSLR.
                                </h5>
                            </div>
                            <p className="mx-5 mt-4 mb-2 text-left">
                                <div className="button main-button" onClick={() => openModal()}>
                                    START CONVERSATION
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
                            Change the sentence to: Free next-day delivery on thousands of items.
                        </p>
                    </div>
                    <div className="col-sm-4 text-center feature">
                        <div className="logo-wrapper m-2 text-center">
                            <div className="logo-return" />
                        </div>
                        <p className="inShort m-2">FREE RETURNS</p>
                        <p className="description m-1">
                            You may return any item purchased on Digital World.
                        </p>
                    </div>
                    <div className="col-sm-4 text-center feature">
                        <div className="logo-wrapper m-2 text-center">
                            <div className="logo-support" />
                        </div>
                        <p className="inShort m-2">CUSTOMER SUPPORT</p>
                        <p className="description m-1">
                            Manage your account, check order status or access the Digital World customer support.
                        </p>
                    </div>
                </div>
                <div className="row my-5 py-5 mx-0 my-0">&nbsp;</div>
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
                                {disableInput && (
                                    <div className="chat-processing">
                                        <Loader
                                            type="ThreeDots"
                                            color="#23549C"
                                            height={40}
                                            width={40}
                                        />
                                        processing...
                                    </div>
                                )}
                                <div ref={chatContainerEl} className="chat-container">
                                    {conversation
                                        .filter((e: any) => e && e.author)
                                        .map((e: any, i: number) => (
                                            <ChatBalloon
                                                key={`chat-${i}`}
                                                isSystem={e.author.toUpperCase() === 'SYSTEM'}
                                                isFromMe={e.author.toUpperCase() === 'ME'}
                                                chat={e}
                                            />
                                        ))}
                                    <div ref={chatContainerBottomEl} />
                                </div>
                            </Modal.Body>
                            <div
                                className={classNames('chat-input-box', {
                                    disableInput: disableInput,
                                })}
                            >
                                <input
                                    ref={inputEl}
                                    disabled={disableInput}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter') {
                                            sendMessage();
                                        }
                                    }}
                                    onSubmit={() => sendMessage()}
                                />
                                <div className="search-btn" onClick={() => sendMessage()}>
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

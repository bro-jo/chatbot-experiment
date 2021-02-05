import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import { ChatBalloon } from './component/ChatBalloon';
import { conversations } from './data/converstaion';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import classNames from 'classnames';
import _ from 'lodash';
import qs from 'qs';

const INTERVAL_TIME = 3100;

const convertConversation = (e: any) => {
    if ((e.text || '').trim() === '*camera-choice-space*') {
        const brand = localStorage.getItem('camera/brand');
        const price = localStorage.getItem('camera/price');
        if (brand === 'sony') {
            if (price === 'below') {
                e.text = '[Sony] please click this';
                e.link =
                    'https://www.amazon.com/Sony-Cyber-shot-DSC-W800-Digital-Camera/dp/B00KJX57I8/ref=sr_1_3?dchild=1&keywords=Sony+DSCW800%2FB+20.1+MP+Digital+Camera+%28Black&qid=1599960270&sr=8-3';
                e.imageUri = '/image/sony-below-1700.png';
            } else {
                e.text = '[Sony] please click this';
                e.link =
                    'https://www.amazon.com/Sony-Full-Frame-Mirrorless-Interchangeable-Lens-Optical/dp/B07YQJ9392/ref=sr_1_1?dchild=1&keywords=Sony+a7+III+Full-Frame+Mirrorless+Interchangeable-Lens+Camera+Optical+with+3-Inch+LCD%2C+Black+%28ILCE7M3%2FB%29&qid=1599960502&sr=8-1';
                e.imageUri = '/image/sony-over-1700.png';
            }
        } else if (brand === 'nikon') {
            if (price === 'below') {
                e.text = '[Nikon] please click this';
                e.link =
                    'https://www.amazon.com/Nikon-COOLPIX-Digital-Camera-Built/dp/B08B6HSPXC/ref=sr_1_2?dchild=1&amp;keywords=nikon+under+1700&amp;qid=1612317538&amp;rnid=2941120011&amp;s=electronics&amp;sr=1-2';
                e.imageUri = '/image/nikon-below-v2.png';
            } else {
                e.text = '[Nikon] please click this';
                e.link =
                    'https://www.amazon.com/Nikon-FX-Format-Mirrorless-Camera-Body/dp/B07GPRBGQ2/ref=sr_1_3?dchild=1&keywords=2.+Product%3A+Nikon+Z6+Full+Frame+Mirrorless+Camera+Body&qid=1599960926&sr=8-3';
                e.imageUri = '/image/nikon-over-1700.png';
            }
        } else if (brand === 'canon') {
            if (price === 'below') {
                e.text = '[Canon] please click this';
                e.link =
                    'https://www.amazon.com/Canon-PowerShot-Digital-Camera-Accessory/dp/B071NPXMLJ/ref=sr_1_5?dchild=1&keywords=Canon+-+PowerShot+SX540HS+20.3-Megapixel+Digital+Camera+-+Black&qid=1599960773&sr=8-5';
                e.imageUri = '/image/canon-below-1700.png';
            } else {
                e.text = '[Canon] please click this';
                e.link =
                    'https://www.amazon.com/Canon-Mark-Frame-Digital-Camera/dp/B01KURGS9E/ref=sr_1_1?dchild=1&amp;keywords=Canon+DSLR+over+%241700&amp;qid=1612317435&amp;sr=8-1';
                e.imageUri = '/image/canon-over-v2.png';
            }
        }

        return e;
    }
    e.text = (e.text || '').replace('*meorgift*', `${localStorage.getItem('meorgift')}`);
    e.text = (e.text || '').replace(
        '*camera/type*',
        `${localStorage.getItem('camera/type') || 'DSLR'}`,
    );
    e.text = (e.text || '').replace('*camera/price*', `${localStorage.getItem('camera/price')}`);
    e.text = e.text.replace(
        '*camera/brand*',
        _.upperFirst(localStorage.getItem('camera/brand') || ''),
    );
    return e;
};

const App: React.FC = () => {
    const inputEl = useRef(null);
    const chatContainerEl = useRef(null);
    const chatContainerBottomEl = useRef(null);
    const [conversation, setConversation] = useState([] as any);
    const [disableInput, setDisableInput] = useState(false);
    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [imageType, setImageType] = useState('1');

    const init = async () => {
        const queryString = qs.parse(window.location.search, { ignoreQueryPrefix: true });
        if (queryString && queryString.imageType && queryString.imageType.toString) {
            setImageType(queryString.imageType.toString() as any);
        }
    };

    useEffect(() => {
        init();
    }, []);

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

            if (
                value.toLowerCase() === 'sony' ||
                value.toLowerCase() === 'nikon' ||
                value.toLowerCase() === 'canon'
            ) {
                localStorage.setItem('camera/brand', value);
            }
            if (value.toLowerCase() === 'cannon') {
                localStorage.setItem('camera/brand', 'canon');
            }
            const number = parseInt(value.replace(/\D/g, ''), 10);
            if (
                value.toLowerCase().includes('me') ||
                value.toLowerCase().includes('mine') ||
                value.toLowerCase().includes('my')
            ) {
                localStorage.setItem('meorgift', 'for you');
            }
            if (value.toLowerCase().includes('gift')) {
                localStorage.setItem('meorgift', 'as a gift');
            }
            if (value.toLowerCase().includes('dslr') || value.toLowerCase().includes('digital')) {
                localStorage.setItem('camera/type', 'DSLR');
            }
            if (
                value.toLowerCase().includes('point') ||
                value.toLowerCase().includes('point and shoot') ||
                value.toLowerCase().includes('point-and-shoot')
            ) {
                localStorage.setItem('camera/type', 'point-and-shoot');
            }
            if (
                value.toLowerCase().includes('below') ||
                value.toLowerCase().includes('under') ||
                (number < 1700 && number > 100)
            ) {
                localStorage.setItem('camera/price', 'below');
            }
            if (value.toLowerCase().includes('over') || (number > 1700 && number < 99999999)) {
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
                            .map(e => convertConversation(e));
                        setConversation(currentConversation.concat(c));
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
                                    Start counseling with our AI agent Tom for great recommendations
                                    on digital cameras, from point and shoot to DSLR.
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
                                <div
                                    className={classNames('avatar-image', {
                                        'avatar-image2': imageType === '2',
                                        'avatar-image3': imageType === '3',
                                        'avatar-image4': imageType === '4',
                                        'avatar-image5': imageType === '5',
                                    })}
                                />
                                <div ref={chatContainerEl} className="chat-container">
                                    {conversation
                                        .filter((e: any) => e && e.author)
                                        .map((e: any) => convertConversation(e))
                                        .map((e: any, i: number) => (
                                            <ChatBalloon
                                                key={`chat-${i}`}
                                                isSystem={e.author.toUpperCase() === 'SYSTEM'}
                                                isFromMe={e.author.toUpperCase() === 'ME'}
                                                chat={e}
                                            />
                                        ))}
                                    {disableInput && (
                                        <div className="chat-processing">
                                            <ChatBalloon
                                                key={`chat-loading`}
                                                isSystem={false}
                                                isFromMe={false}
                                                chat={{ text: 'loading...' }}
                                            />
                                        </div>
                                    )}
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

import React, { useCallback, useContext, useMemo, useEffect, useState } from 'react';
import classNames from 'classnames';
import Glyphicon from 'react-bootstrap/es/Glyphicon';
import moment from 'moment';
import lscache from 'lscache';
import axios from 'axios';
import '../component/chatBalloon.css';
import { getFirebaseImageUri, storage } from '../common/firebase';

const renderContents = ({chat, imageUri, fileUri}) => {
    if (imageUri) {
        return (
            <div className="pointer" onClick={() => window.open(imageUri)}>
                <img src={imageUri} alt="chat_img"/>
            </div>
        );
    }

    if (fileUri && chat.file_path) {
        return (
            <div className="pointer" onClick={() => window.open(fileUri)}>
                <p className="text-left text-black-50">
                    {chat.file_path.replace('chat_file/', '')}
                </p>
                <p className="text-right font-weight-bold">
                    <a href={fileUri} target="_blank" download>
                        다운로드
                    </a>
                </p>
            </div>
        );
    }

    return (
        <div>
            {chat.text && chat.text.includes('\n')
                ? chat.text.split('\n').map((t) => <span>{t}<br /></span>)
                : chat.text}
        </div>
    );
};

export const ChatBalloon = ({key, chat}) => {
    const [isFromMe, setFromMe] = useState(null);
    const [profileImage, setProfileImageUri] = useState(null);
    const imageUri = chat.imageUri;
    const fileUri = chat.fileUri;
    useEffect(() => {
        setFromMe(chat.author_id === localStorage.getItem('key-ui'));
    }, [chat]);
    useEffect(() => {
        (async () => {
            if (!chat || !chat.author) {
                return;
            }

            const profileUri = lscache.get(`@cache/userProfileImage/${chat.author}`);
            if (profileUri) {
                setProfileImageUri(profileUri);
                return;
            }

            const userId = localStorage.getItem('key-ui');
            const headers = {
                'authorization': 'n2l4nlaznlzsfnl1nlr',
                'x-api-key2': 'CFB2ntl11A154FF4i355hu29p8',
            };
            const { data } = await axios.get(`/api/user/${userId}/info`, { headers });
            console.warn('profile', data);

            const profileImgPath = data && data.profile_image;
            if (profileImgPath) {
                const profileUri = await getFirebaseImageUri(profileImgPath);
                lscache.set(`@cache/userProfileImage/${chat.author}`, profileUri);
                setProfileImageUri(profileUri);
            }
        })()
    }, [chat]);

    if (isFromMe === null || !chat) {
        return <div key={key} />;
    }

    if (chat.isSystemMessage) {
        return (
            <div key={key} className="chat-balloon text-center">
                <div className="chat-balloon--systemMessage">
                    {chat.text}
                </div>
            </div>
        )
    }
    if (isFromMe === false) {
        return (
            <div key={key} className="chat-balloon text-left">
                <div className="chat-balloon--author chat-opponent">
                    {chat.author}
                </div>
                <div>
                    {!imageUri && !fileUri
                        ? (
                            <div className="d-inline-block vertical-top m-2 mr-0">
                                <div
                                    className="profile-circle-image"
                                    style={{backgroundImage: `url('${profileImage}`}}
                                />
                            </div>
                        ) : <span />
                    }
                    <div className="chat-balloon--wrapper d-inline-block">
                        <div
                            className={classNames(
                                'chat-balloon--box chat-opponent',
                                { 'chat-balloon--box-image': imageUri },
                            )}
                        >
                            {renderContents({ chat, imageUri, fileUri })}
                        </div>
                        <div
                            className="chat-balloon--time"
                        >
                            {moment(chat.chatSentAt).format('HH:mm')}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div key={key} className="chat-balloon text-right">
            <div className="chat-balloon--author">
                {chat.author}
            </div>
            <div className="chat-balloon--wrapper">
                <div
                    className="chat-balloon--time"
                >
                    {moment(chat.chatSentAt).format('HH:mm')}
                </div>
                <div
                    className={classNames(
                        'chat-balloon--box',
                        { 'chat-balloon--box-image': imageUri },
                    )}
                >
                    {renderContents({chat, imageUri, fileUri})}
                </div>
            </div>
        </div>
    )
};

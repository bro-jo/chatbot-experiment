import React from 'react';
import classNames from 'classnames';
import '../component/chatBalloon.css';

const renderContents: any = ({chat, imageUri}: any) => {
  const hasLink = (chat && chat.link);

  return (
    <div
      style={hasLink ? {cursor: 'pointer', textDecoration: "underline"} : {}}
      onClick={() => {
      if (!hasLink) {
        return;
      }

        window.open(chat.link);
      }}
    >
      {!imageUri ? <div /> : (
        <div
          className="pointer"
          // onClick={() => window.open(imageUri)}
        >
          <img className="image" src={imageUri} alt="chat_img" />
        </div>
      )}
      {hasLink ? <div style={{height: 4}} /> : <div />}
      <div style={hasLink ? {paddingLeft: 20} : {}}>
        {chat.text && chat.text.includes('\n')
          ? chat.text.split('\n').map((t: any) => (
            <span style={{textDecoration: hasLink ? "underline" : "none"}}>{t}<br /></span>
          ))
          : chat.text}
      </div>
    </div>
  );
};

export const ChatBalloon = ({key, chat, isFromMe, isSystem}: any) => {
  const imageUri = chat.imageUri;

  if (isSystem) {
    return (
      <div key={key} className="chat-balloon text-center">
        <div className="chat-balloon--author chat-system">{chat.author}</div>
        <div>
          <div className="chat-balloon--wrapper d-inline-block">
            <div
              className={classNames('chat-balloon--box chat-system', {
                'chat-balloon--box-image': imageUri,
              })}
            >
              {renderContents({chat, imageUri})}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isFromMe === false) {
    return (
      <div key={key} className="chat-balloon text-left">
        <div className="chat-balloon--author chat-opponent">{chat.author}</div>
        <div>
          <div className="chat-balloon--wrapper d-inline-block">
            <div
              className={classNames('chat-balloon--box chat-opponent', {
                'chat-balloon--box-image': imageUri,
              })}
            >
              {renderContents({chat, imageUri})}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div key={key} className="chat-balloon text-right">
      <div className="chat-balloon--author">{chat.author}</div>
      <div className="chat-balloon--wrapper">
        <div
          className={classNames('chat-balloon--box', {
            'chat-balloon--box-image': imageUri,
          })}
        >
          {renderContents({chat, imageUri})}
        </div>
      </div>
    </div>
  );
};

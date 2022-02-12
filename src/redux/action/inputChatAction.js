export const CHAT = 'CHAT';
export const DATE_NOW = 'DATE_NOW';

let id = 1;

export const add_user_inputText = userInputData => {
  return {
    type: CHAT,
    chatList: {
      id: id++,
      chatList: userInputData,
    },
  };
};

export const add_current_date = () => {
  return {
    type: DATE_NOW,
    date: '',
  };
};

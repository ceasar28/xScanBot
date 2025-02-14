export const welcomeMessageMarkup = async (userName: string) => {
  return {
    message: `Hi @${userName}, Welcome to X follower scan bot.\n\n I can scan a twitter user account and outputs it followers with high followers numbers`,
    keyboard: [
      [
        {
          text: 'scan X account 🐦',
          callback_data: JSON.stringify({
            command: '/scanX',
            language: 'twitter',
          }),
        },
      ],
    ],
  };
};

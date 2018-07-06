import SendBird from 'sendbird';

const APP_ID = '89F499BE-8D99-4160-808F-585794AAF4C7';
const TOKEN = '40f5b2e8e67f2a4390a68047a0b575836f3b0392';

export const sbConnect = ({ userId, nickname }) => {

    return new Promise((resolve, reject) => {
        const sb = new SendBird({ 'appId': APP_ID });
        sb.connect(userId, TOKEN, (user, error) => {
            if (error) {
                console.log(error)
                reject('SendBird Login Failed.');
            } else {
                sb.updateCurrentUserInfo(nickname, null, (user, error) => {
                    if (error) {
                        reject('Update User Failed.');
                    } else {
                        resolve(user);
                    }
                })
            }
        })
    })
};

export const SENDBIRD_ACCESS = "SENDBIRD_ACCESS";
export const SENDBIRD_FAIL = "SENDBIRD_FAIL";
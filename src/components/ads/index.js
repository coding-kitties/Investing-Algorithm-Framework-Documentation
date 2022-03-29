import AdSense from 'react-adsense';

export const Ad = (slot) => {

    return (
        <AdSense.Google
            client='ca-pub-7554139046090360'
            slot={slot}
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
        />
    )
}
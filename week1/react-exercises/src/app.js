
import React from 'react';
import HobbyList from './hobbies.js';
import Guarantee from './guarantee';
import Counter from './counter';

function app (){
    return (
        <div className='container'>
            <HobbyList />
            <hr/>
            <div className = 'Guarantee'> 
                <Guarantee source= "f-delivery.png" mode='free-delivery' name ='Free Shipping' description='order up to 50$, you get free shipping in the Netheralnd. you will be happy and so im I ' />
                <Guarantee source= "coin.png" mode=' money back' name ='100% money back' description='if you dont recive your order within 7 dats we Guarantee your money 100% TRUST US' /> 
                <Guarantee source= "chat.png" mode=' chat' name ='1online support 24/7' description='we are alwayes available to help you my dear' /> 
            </div>
            <hr/>
            <Counter/>
        </div>
    )
}

export default app
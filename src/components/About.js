import React from 'react'
import Button from './Button'
function About() {
  return (
    <>
    <div className='aboutPage' style={{background: 'linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 33.33%, rgba(213, 224, 255, 0) 100%)',padding:"10px"}}>
    <div className='about'>
        <h1 className='headings'>About Diana</h1>
        <h3 style={{fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '22px'}}>A Platform that looks out for you</h3>
        <p>Diana empowers you to understand how your body works so you can look and feel your best. </p>
        <hr align="center" width="70%" style={{border:' 0.2px solid'}}/>
    </div>
    <div className='phil'>
        <h1>Our Philosophy</h1>
        <h3 className='headings'>Sustainable wellness is a big-picture, inside out approach</h3>
        <div className='content'>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness.</div>
        <div className='applications'>
            <h3>That’s why we’ve created an integrated ecosystem of: </h3>
            <div>
            <svg width="70" height="64" viewBox="0 0 70 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.7518 34.4662C61.2363 33.5824 60.2789 33.0669 59.2478 33.0669C58.2168 33.0669 57.2594 33.5824 56.7439 34.4662C54.8291 37.6329 48.4956 48.4588 48.4956 53.2457C48.4956 59.1374 53.2826 63.998 59.2478 63.998C65.1395 63.998 70.0001 59.211 70.0001 53.2457C70.0001 48.4588 63.7402 37.6329 61.7518 34.4662ZM58.585 57.8854C58.3641 58.4009 57.8486 58.6955 57.3331 58.6955C57.1121 58.6955 56.9648 58.6219 56.7439 58.5482C54.4609 57.5172 53.0616 55.3078 53.0616 52.8775C53.0616 51.6255 53.7244 49.7844 55.05 47.2068C55.4183 46.544 56.2284 46.2494 56.8912 46.6177C57.554 46.9859 57.8486 47.796 57.4803 48.4588C56.0074 51.4046 55.7865 52.5829 55.7865 52.8775C55.7865 54.2768 56.5966 55.5288 57.8486 56.1179C58.585 56.3389 58.8796 57.149 58.585 57.8854Z" fill="#A5A6F6"/>
            <path d="M9.97903 43.5243C7.32779 46.1756 7.32779 50.447 9.97903 53.0246C12.6303 55.6758 16.9017 55.6758 19.5529 53.0246L47.2436 25.3339L31.5571 21.8726L9.97903 43.5243Z" fill="#A5A6F6"/>
            <path d="M59.1741 26.0705C60.0579 26.9542 61.5308 26.9542 62.4145 26.0705C63.2983 25.1867 63.2983 23.7138 62.4145 22.8301L40.0999 0.662809C39.2162 -0.220936 37.7433 -0.220936 36.8595 0.662809C35.9758 1.54655 35.9758 3.01946 36.8595 3.90321L37.596 4.63966L4.30826 37.8538C-1.43609 43.5981 -1.43609 52.9511 4.30826 58.6954C10.0526 64.4398 19.4056 64.4398 25.1499 58.6954L58.4377 25.4077L59.1741 26.0705ZM21.9095 55.455C17.9327 59.4319 11.5255 59.4319 7.54866 55.455C3.5718 51.4782 3.5718 45.071 7.54866 41.0942L40.8364 7.80642L55.1973 22.1673L21.9095 55.455Z" fill="#A5A6F6"/>
            </svg>
            <br /> <br />
            Consciously formulated products that deliver feel-good results fast
            </div>
            <div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 51.3333C70 52.0333 69.5333 52.6556 68.9111 52.8111C61.1333 55.1444 55.1444 61.1333 52.8111 68.9111C52.5778 69.5333 52.0333 70 51.3333 70C50.6333 70 50.0111 69.5333 49.8556 68.9111C47.5222 61.1333 41.5333 55.1444 33.7556 52.8111C33.1333 52.5778 32.6667 52.0333 32.6667 51.3333C32.6667 50.6333 33.1333 50.0111 33.7556 49.8556C41.5333 47.5222 47.5222 41.5333 49.8556 33.7556C50.0889 33.1333 50.6333 32.6667 51.3333 32.6667C52.0333 32.6667 52.6556 33.1333 52.8111 33.7556C55.1444 41.5333 61.1333 47.5222 68.9111 49.8556C69.5333 50.0111 70 50.6333 70 51.3333ZM30.0222 41.1444C30.6444 40.9111 31.1111 40.3667 31.1111 39.6667C31.1111 38.9667 30.6444 38.3444 30.0222 38.1889C23.8 36.3222 18.9 31.5 17.0333 25.2C16.8 24.5778 16.2556 24.1111 15.5556 24.1111C14.8556 24.1111 14.2333 24.5778 14.0778 25.2C12.2111 31.4222 7.38889 36.3222 1.08889 38.1889C0.466667 38.3444 0 38.9667 0 39.6667C0 40.3667 0.466667 40.9889 1.08889 41.1444C7.31111 43.0111 12.2111 47.8333 14.0778 54.1333C14.3111 54.7556 14.8556 55.2222 15.5556 55.2222C16.2556 55.2222 16.8778 54.7556 17.0333 54.1333C18.9 47.8333 23.7222 43.0111 30.0222 41.1444ZM24.4222 18.5889C31.4222 20.6889 36.8667 26.0556 38.9667 33.1333C39.2 33.7556 39.7444 34.2222 40.4444 34.2222C41.1444 34.2222 41.7667 33.7556 41.9222 33.1333C44.0222 26.1333 49.3889 20.6889 56.4667 18.5889C57.0889 18.3556 57.5556 17.8111 57.5556 17.1111C57.5556 16.4111 57.0889 15.7889 56.4667 15.6333C49.4667 13.5333 44.0222 8.16667 41.9222 1.08889C41.7667 0.466667 41.1444 0 40.4444 0C39.7444 0 39.1222 0.466667 38.9667 1.08889C36.8667 8.08889 31.5 13.5333 24.4222 15.6333C23.8 15.8667 23.3333 16.4111 23.3333 17.1111C23.3333 17.8111 23.8 18.4333 24.4222 18.5889ZM30.3333 59.8889H28V57.5556C28 56.7 27.3 56 26.4444 56C25.5889 56 24.8889 56.7 24.8889 57.5556V59.8889H22.5556C21.7 59.8889 21 60.5889 21 61.4444C21 62.3 21.7 63 22.5556 63H24.8889V65.3333C24.8889 66.1889 25.5889 66.8889 26.4444 66.8889C27.3 66.8889 28 66.1889 28 65.3333V63H30.3333C31.1889 63 31.8889 62.3 31.8889 61.4444C31.8889 60.5889 31.1889 59.8889 30.3333 59.8889ZM64.5556 31.1111C65.4111 31.1111 66.1111 30.4111 66.1111 29.5556C66.1111 28.7 65.4111 28 64.5556 28C63.7 28 63 28.7 63 29.5556C63 30.4111 63.7 31.1111 64.5556 31.1111ZM2.33333 14.7778H4.66667V17.1111C4.66667 17.9667 5.36667 18.6667 6.22222 18.6667C7.07778 18.6667 7.77778 17.9667 7.77778 17.1111V14.7778H10.1111C10.9667 14.7778 11.6667 14.0778 11.6667 13.2222C11.6667 12.3667 10.9667 11.6667 10.1111 11.6667H7.77778V9.33333C7.77778 8.47778 7.07778 7.77778 6.22222 7.77778C5.36667 7.77778 4.66667 8.47778 4.66667 9.33333V11.6667H2.33333C1.47778 11.6667 0.777778 12.3667 0.777778 13.2222C0.777778 14.0778 1.47778 14.7778 2.33333 14.7778ZM18.6667 7C19.5222 7 20.2222 6.3 20.2222 5.44444C20.2222 4.58889 19.5222 3.88889 18.6667 3.88889C17.8111 3.88889 17.1111 4.58889 17.1111 5.44444C17.1111 6.3 17.8111 7 18.6667 7Z" fill="#A5A6F6"/>
            </svg>
            <br /> <br />
            In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body
            </div>
            <div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.204 30.4348C69.0368 30.1304 70.2587 28.6087 69.9532 27.087C68.4259 13.087 57.1234 1.82609 42.7662 0C41.2388 0 39.406 1.21739 39.406 2.73913C39.406 4.26087 40.6279 5.78261 42.1552 6.08696C53.7632 7.6087 62.6219 16.4348 63.8438 27.6957C64.1492 29.2174 65.3711 30.4348 66.8985 30.4348H67.204ZM51.0139 40.7826C53.4577 41.6957 56.207 42.3043 58.9562 42.6087C63.5383 43.2174 66.8985 47.1739 66.8985 51.7391V60.8696C66.8985 63.3043 65.6766 65.4348 64.1492 67.2609C62.6219 69.087 60.1781 70 57.7343 70H56.8179C47.0428 69.087 37.2677 65.7391 29.0199 60.2609C21.3831 55.3913 14.6627 48.6957 9.77512 41.087C4.58209 32.8696 0.916418 23.1304 0 13.3913C0 10.9565 0.610945 8.52174 2.13831 6.69565C3.66567 4.86957 5.80398 3.65217 8.24776 3.34783H9.16418H18.3284C22.9104 3.34783 26.8816 6.69565 27.4925 11.2609C27.798 14 28.4089 16.7391 29.3254 19.1739C30.5473 22.5217 29.6308 26.4783 27.1871 28.913L25.0487 31.0435C28.7144 36.8261 33.602 41.3913 39.1005 45.0435L41.2388 42.913C43.988 40.4783 47.6537 39.5652 51.0139 40.7826ZM60.789 60.8696V51.7391C60.789 50.2174 59.5671 49 58.3453 48.6957C55.2905 48.087 52.2358 47.4783 49.1811 46.2609C47.9592 45.6522 46.7373 45.9565 45.8209 46.8696L41.8497 50.8261C40.9333 52.0435 39.406 52.0435 38.1841 51.4348C29.9363 46.8696 23.2159 40.1739 18.6338 31.9565C18.0229 30.7391 18.3284 29.2174 19.2448 28.3043L23.2159 24.6522C23.8269 23.7391 24.1323 22.5217 23.8269 21.3043C22.605 18.5652 21.6886 15.2174 21.3831 12.1739C21.0776 10.6522 19.8557 9.43478 18.3284 9.43478H9.16418C8.24776 9.43478 7.33134 10.0435 6.7204 10.6522C6.41492 11.2609 6.10945 11.8696 6.10945 12.7826C7.02587 21.6087 10.0806 30.1304 14.9682 37.7391C19.5502 44.7391 25.3542 50.8261 32.3801 55.087C40.0169 59.9565 48.5701 63 57.4288 63.913C58.6507 63.913 59.2617 63.6087 59.8726 63C60.4836 62.3913 60.789 61.7826 60.789 60.8696ZM42.1552 18.5652C40.6279 18.2609 39.406 16.7391 39.7114 14.913C40.0169 13.3913 41.5443 12.1739 43.3771 12.4783C50.7084 14 56.5124 19.4783 57.7343 26.7826C58.0398 28.3043 57.1234 30.1304 55.2905 30.4348H54.6796C53.1522 30.4348 51.9303 29.5217 51.6249 28C50.7084 23.1304 47.0428 19.4783 42.1552 18.5652Z" fill="#A5A6F6"/>
            </svg>
            <br /> <br />
            In-app consultation portals that connect you with compassionate wellness experts
            </div>
        </div>
        <div className=''>
        Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
        </div>
    </div>
    </div>
    <div className='diff' style={{ background: 'linear-gradient(165.41deg, #D99EC9 0%, rgba(246, 240, 196, 0) 100%)',padding:'10px' }}>
      <h4>What makes us different?</h4>
      <h2 className='headings'>Reimagining and rewiring self-care</h2>
      <p>
        You care about conscious consumption, and so do we.  <br />

        When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best <br />

        We collaborate with researchers and doctors to <br />
        <ul>
          <li>Help you get granular about your health and self-care with personalized insights, and</li>
          <li> Equip you with simple, sustainable products that get the job done</li>
        </ul>

        No to-the-moon-and-back claims in this neck of the woods.

        We’re just solving real problems for real people here.
      </p>

    </div>
    <div className='lib' style={{background : "#DCE9E9",padding:'10px'}}>
        <h3>Liberate your everyday wellness </h3>
        <p className='headings'>Shop our self-care products </p>
        <p className='con'>Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.</p>
        <Button content='Upgrade your self-care' col='#FFFFFF' back='linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)'/>
        <h4>#NoNasties, we promise!</h4> <br />
        <img alt="" src='./images/pexels-karolina-grabowska-4041391.png' style={{
            objectFit:'cover',
            objectPosition:'bottom',
            width:'100%',
            height:'345px'}}/> 
    </div>
    <div className='trackMood' style={{background: "linear-gradient(180deg, #FFF6FB 0%, #FFFFFF 100%)",padding:'10px'}}>
        <h3 className='headings'>Track Your Mood</h3>
        <p className='text'>All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. </p>
        <Button content='Track you mood on the app' col='#FFFFFF' back='linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)'/> <br />
        <div className="moods">
            <img alt="" src="./images/mood1.png"/>
            <img alt="" src="./images/mood2.png"/>
            <img alt="" src="./images/mood3.png"/>
            <img alt="" src="./images/mood4.png"/>
        </div>
    </div>
    <div className='trackPeriod' style={{ background: 'linear-gradient(176.88deg, #F3B8BC 2.58%, #FFDAD4 93.07%)' }}>
      <div style={{ padding: '10px' }}>
        <h3 className='headings'>Track your period</h3>
        <p className='text'>Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data. </p>
        <Button content='Track you period on the app' col='#FFFFFF' back='linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%)'/>
      </div>
      <img src="./images/calender.png" alt="" width={'100%'} />
    </div>
    <div className='consult' style={{ background: 'linear-gradient(270deg, #DADAE4 0.25%, #EEEEF0 24.33%, #F8F8F8 52.08%, #FEFEFE 100%)' }}>
      <div style={{padding:'10px'}}>
        <h3 className='headings'>Consult with wellness experts</h3>
        <p className='text'>Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. </p>
        <Button content='Get a consultation' col='#FFFFFF' back='linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%)'/>
      </div>

      <img src="./images/doctor.png" alt="" width={'100%'} />
    </div>
    <div className='personal' style={{background:'#F66E6E',padding:'10px'}}>
        <h2 className='headings'style={{color:'rgba(255, 255, 255, 0.8)',paddingTop:'10px'}}>Get your personalized period box</h2>
        <img src="./images/daina.png" alt="" width={'100%'}/>
        <p className='text' style={{color:'rgba(255, 255, 255, 0.8)'}}>Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. </p>
        <Button content='create your box on the app' col='#FFFFFF' back='#000000' icon='<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.84727 7.7L2.1207 13.7C1.89648 13.9 1.67227 14 1.33594 14C0.999609 14 0.775391 13.9 0.551172 13.7C0.102734 13.3 0.102734 12.7 0.551172 12.3L6.49297 7L0.551172 1.7C0.102734 1.3 0.102734 0.7 0.551172 0.3C0.999609 -0.1 1.67227 -0.1 2.1207 0.3L8.84727 6.3C9.2957 6.7 9.2957 7.3 8.84727 7.7Z" fill="white"/>
</svg>
'/>
    </div>
    <div className='card' style={{background:"linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 100%)",padding:'10px'}}>
        <p className='headings' style={{padding:'40px'}}>With Diana, you’re in control of your health, your every day, and your story.</p>
    </div>
    </>
  )
}

export default About
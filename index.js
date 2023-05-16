var query=document.querySelector('.chat-input input');
var btn=document.querySelector('.btn-submit');
var chatbtn=document.querySelector('.chat-btn')
var faq=false;
document.querySelector('.FAQBTN').addEventListener("click",()=>{
                const ele= document.createElement('div')
                ele.classList.add('msg-output')
                ele.innerHTML='<label>Frequently Asked Queries:</label><br><label>11.What is the purpose of your website?</label><label>12.What types of exams does your website cover?</label><label>13.How can I access the study materials on your website?</label><label>14.do you have crash courses?</label><label>15.do you have any personal mentorship program</label><label>16.how can i contact you?</label><label>17.Back to Main menu</label>'
                document.querySelector('.chat-body').appendChild(ele)
})
chatbtn.addEventListener('click',()=>{
    document.querySelector('.chat').style.opacity="1"
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector('.chat').style.opacity="0"
    const elements = document.querySelectorAll('.msg-output');
    const ele = document.querySelectorAll('.msg-input');
    for (let i = 3; i < elements.length; i++) {
    elements[i].remove();
    }
    ele.forEach(element => element.remove());
})
btn.addEventListener('click',()=>{
    
    const ele= document.createElement('div')
    ele.textContent=query.value;
    ele.classList.add('msg-input')
    document.querySelector('.chat-body').appendChild(ele)
    handleQuery(query.value);
    query.value=""
})
function handleQuery(input)
{
    const ele= document.createElement('div')
    if(parseInt(input)>=1 && parseInt(input)<=8)
    {
        switch(parseInt(input))
        {
            case 1:
            ele.textContent="Redirecting you to the page.....";
            ele.classList.add('msg-output')
            document.querySelector('.chat-body').appendChild(ele)
                window.location.href='https://www.sciastra.com/'
                break;
            case 2:
            ele.textContent="Redirecting you to the page.....";
            ele.classList.add('msg-output')
            document.querySelector('.chat-body').appendChild(ele)
                window.location.href='https://www.sciastra.com/courses'
                break;
            case 3:
            ele.textContent="Redirecting you to the page.....";
            ele.classList.add('msg-output')
            document.querySelector('.chat-body').appendChild(ele)
                window.location.href='https://www.sciastra.com/selections'
                break;
            case 4:
            ele.textContent="Redirecting you to the page.....";
            ele.classList.add('msg-output')
            document.querySelector('.chat-body').appendChild(ele)
                window.location.href='https://www.sciastra.com/blog'
                break;    
            case 5:
            ele.textContent="Redirecting you to the page.....";
            ele.classList.add('msg-output')
            document.querySelector('.chat-body').appendChild(ele)
                window.location.href='https://www.sciastra.com/materials'
                break;
            case 6:
            ele.textContent="Redirecting you to the page.....";
            ele.classList.add('msg-output')
            document.querySelector('.chat-body').appendChild(ele)
                window.location.href='https://www.sciastra.com/teams'
                break;
            case 7:
            ele.textContent="Redirecting you to the page.....";
            ele.classList.add('msg-output')
            document.querySelector('.chat-body').appendChild(ele)
                window.location.href='https://www.sciastra.com//contact'
                break;
            case 8:
                ele.classList.add('msg-output')
                ele.innerHTML='<label>Frequently Asked Queries:</label><br><label>11.What is the purpose of your website?</label><label>12.What types of exams does your website cover?</label><label>13.How can I access the study materials on your website?</label><label>14.do you have crash courses?</label><label>15.do you have any personal mentorship program</label><label>16.how can i contact you?</label><label>17.Back to Main menu</label>'
                document.querySelector('.chat-body').appendChild(ele)
                break;         
        }
    }
    else if(parseInt(input)>=11 && parseInt(input)<=17)
    {
        const ele= document.createElement('div')
        switch(parseInt(input))
        {
            case 11:ele.classList.add('msg-output')
            ele.innerHTML='<p>Our website is designed to help students prepare for various competitive exams<br>by providing study materials, practice tests, and other resources.</p>'
            document.querySelector('.chat-body').appendChild(ele)
            break;
            case 12:ele.classList.add('msg-output')
            ele.innerHTML='<p>We cover exams like<br>IISC<br>IAT<br>NEST<br>ISI/CMI<br>IIT-JAM<br>IACS<br>CUET<br>ICAR</p>'
            document.querySelector('.chat-body').appendChild(ele)
            break;
            case 13:ele.classList.add('msg-output')
            ele.innerHTML='<p>You can access the study materials on our website by registering as a user and logging in.<br> Once you are logged in, you can access the study materials from the materials section of the website.</p>'
            document.querySelector('.chat-body').appendChild(ele)
            break;
            case 14:ele.classList.add('msg-output')
            ele.innerHTML="<p>Yes we do have crash courses.<br>For further info: <a href='https://www.sciastra.com/courses'>Click Here</a></p>"
            document.querySelector('.chat-body').appendChild(ele)
            break;
            case 15:ele.classList.add('msg-output')
            ele.innerHTML="<p>Yes we do have personal mentorship course.<br>You can talk to our experinced mentors on video call<br>For further info: <a href='https://www.sciastra.com/courses'>Click Here</a></p>"
            document.querySelector('.chat-body').appendChild(ele)
            break;
            case 16:ele.classList.add('msg-output')
            ele.innerHTML="<p>Our Contact Info:<br>Address:SciAstra Education Pvt Ltd, Bhubaneswar, Odisha<br>Mail:<a href='mailto:support@sciastra.com'>support@sciastra.com</a><br>For further info: <a href='https://www.sciastra.com/courses'>Click Here</a></p>"
            document.querySelector('.chat-body').appendChild(ele)
            break;
            case 17:ele.classList.add('msg-output')
            ele.innerHTML="<a href='https://www.sciastra.com/'>1.Home</a><a href='https://www.sciastra.com/courses'>2.Courses</a><a href='https://www.sciastra.com/selections'>3.Selections</a><a href='https://www.sciastra.com/blog'>4.Blog</a><a href='https://www.sciastra.com/materials'>5.Materials</a><a href='https://www.sciastra.com/teams'>6.Teams</a><a href='https://www.sciastra.com//contact'>7.Contact Us</a><a href='#' class='FAQBTN'>8.FAQs</a>"
            document.querySelector('.chat-body').appendChild(ele)
            break;
        }
    }
    else{
        const ele= document.createElement('div')
        ele.textContent="Please,Enter correct option no.";
        ele.classList.add('msg-output')
        document.querySelector('.chat-body').appendChild(ele)
    }
}
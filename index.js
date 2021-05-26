let account = {};
account.userName = 'kwennb';
account.password = '2021';

let submit = document.querySelector('#sign-in');
submit.addEventListener('click', validate, false );

//validate function
function validate(){
    let username = document.querySelector('#Username').value;
    let password = document.querySelector('#password').value;
    let details = JSON.parse(localStorage.getItem(account));
    if (username == account.userName && password == account.password){
        location.href = 'repo.html';
    } else{
        let invalidDiv = document.createElement('DIV');
        Object.assign(invalidDiv, {
            textContent: 'invalid username or password',
            className: 'invalid'
        });
        let cancel = document.createElement('a');
        Object.assign(cancel, {
            innerHTML: '&#x2715',     //&#x2715 is how you write (X) in HTML
            className: 'cancel'
        });
        document.querySelector('.content').addEventListener('click', function (e){
            if(e.target.classList.contains('cancel')){
                e.preventDefault();
                document.querySelector('.invalid').style.display ='none';
            }
        }, false )
        invalidDiv.appendChild(cancel);

        let parent = document.querySelector('.content');
        if(!document.querySelector('.invalid'))
        parent.insertBefore(invalidDiv, document.querySelector('.main-box'));
        else if(document.querySelector('.invalid').style.display == 'none')
                document.querySelector('.invalid').style.display = 'block';
    }
}

var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');
const remainingTime=document.querySelector(".remaining-time");
const timeUptext=document.querySelector(".time-up-text");
let interval;

    var app={
        questions:[
         {q:'Sayfanın arka plan rengini yeşil yapan satır hangisidir?' , options:[
             'body backgraund="green"' , 'body bgcolor="green"' ,
             'body color="green"','body backgraund="green.jpg"'] , answer:1} ,
             {q:'Yazının karakter fontunu bedrock yapan satır hangisidir?' , options:[
                'font size="bedrock"' , 'font face="bedrock"',
                'font type="bedrock"' , 'font color="bedrock"'] , answer:2} ,
                {q:'Bir satır boşluk bırakmak için hangisi yazılmalıdır?' , options:[
                    'ul type="A" start="2"' , 'ol type="A" start="2"' ,
                    'ul type="a" start="1"','ol type="A" start="1"'] , answer:2}

        
            
        
        ],

        index:0,
        load:function(){
                if(this.index<=this.questions.length-1){
                quizBox.innerHTML=this.index+1+"."+this.questions[this.index].q;
                op1.innerHTML=this.questions[this.index].options[0];
                op2.innerHTML=this.questions[this.index].options[1];
                op3.innerHTML=this.questions[this.index].options[2];
                op4.innerHTML=this.questions[this.index].options[3];
                this.scoreCard();
                }
                else{
                quizBox.innerHTML="QUIZ OVER ..!!!"; 
                op1.style.display="none";
                op2.style.display="none";
                op3.style.display="none";
                op4.style.display="none";
                btn.style.display="none";
                }
        },
        next:function(){
            this.index++;
            this.load();
        },
        check:function(ele){
            var id=ele.id.split('');

            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                ele.innerHTML="Doğru";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
                ele.innerHTML="Yanlış";
            }
            stopTimer();
           
        },
        notClickAble:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        clickAble:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className='';
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length+"/"+this.score;
        }
        
    }
    function timeIsUp(){
        showTimeUpText();
        for(let i00; i<options.children.length;i++){
            if(options.children[i].id==app[questionIndex].answer){
                options.children[i].classList.add("show-correct");
            }

        }
    }
    function startTimer(){
        let timeLimit=15;
        remainingTime.innerHTML=timeLimit;
        remainingTime.classList.remove("less-time");
        interval=setInterval(()=>{
            timeLimit--;
            if(timeLimit<10){
                timeLimit="0"+timeLimit;
            }
            if(timeLimit < 6){
                remainingTime.classList.add("less-time");
            }
            remainingTime.innerHTML=timeLimit;
            if(timeLimit==0){
                clearInterval(interval);
                timeIsUp();
            }
        },1000)
    }
    function stopTimer(){
        clearInterval(interval);
    }

    window.onload=()=>{
        app.load();
        startTimer();
    }
        
    function showTimeUpText(){
        timeUptext.classList.add("show");
    }
    function hideTimeUpText(){
        timeUptext.classList.remove("show");
    }

    function button(ele){
        app.check(ele);
        app.notClickAble();
    }
     function next(){
         app.next();
         app.clickAble();
         hideTimeUpText();
         startTimer();
     }
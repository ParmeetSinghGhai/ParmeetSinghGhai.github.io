var SIN = 0;
var FLIP = false;
var OFFSET = 2;
var FLIPCOUNT = 0;
var COLORS=[[255,0,0,],[0,255,0],[0,0,255],[255,255,0],[255,0,255],[0,255,255]];
var RAND = Math.floor(Math.random() * 6);
var BUFFER = []

function GenerateColor()
{
    if(FLIP)
    {
        SIN-=OFFSET;
    }
    else
    {
        SIN+=OFFSET;
    }

    if(RAND==0)
    {
        self.postMessage([[SIN,0,0],[255,SIN,SIN]]);
    }
    else if(RAND==1)
    {
        self.postMessage([[0,SIN,0],[SIN,255,SIN]]);        
    }
    else if(RAND==2)
    {
        self.postMessage([[0,0,SIN],[SIN,SIN,255]]);     
    }
    else if(RAND==3)
    {
        self.postMessage([[SIN,SIN,0],[255,255,SIN]]);  
    }
    else if(RAND==4)
    {
        self.postMessage([[SIN,0,SIN],[255,SIN,255]]); 
    }
    else if(RAND==5)
    {
        self.postMessage([0,SIN,SIN]); 
    }
    if(SIN <= 0 || SIN >= 255)
    {
        FLIP = !FLIP;
        FLIPCOUNT += 1;
    }    

    if(FLIPCOUNT >=2)
    {
        if(BUFFER.length == 6)
            BUFFER=[];
        SIN = 0;
        RAND = Math.floor(Math.random() * 6);
        while(BUFFER.find(x=>x==RAND)!=undefined)
        {
            RAND = Math.floor(Math.random() * 6);
        }
        BUFFER.push(RAND);
        FLIPCOUNT =0;
        FLIP = false;
    }
}

setInterval(GenerateColor,0);
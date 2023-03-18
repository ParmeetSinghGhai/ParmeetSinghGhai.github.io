var WAITIME = 10;
var ID = null;
var PROG = 0;
var OFFSET = 1;

function GenerateProgress()
{
    PROG =0;
    ID = setInterval(Post,WAITIME);
}

function Post()
{
    self.postMessage(PROG);
    PROG+=OFFSET;
    if(PROG > 100)
    {
        clearInterval(ID);
    }
}

GenerateProgress();
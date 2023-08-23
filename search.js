document.getElementById('search').addEventListener('click', (e)=>
{
    let fullText = document.getElementsByTagName('textarea')[0].value;

    let keywordsListInput = document.getElementsByTagName('textarea')[1].value;

    let keywordsList = keywordsListInput.split(' ');

    const arrayWithMod_ = keywordsList.filter(ele => ele.startsWith('mod_'));

    document.getElementsByTagName('textarea')[1].value = '';

    arrayWithMod_.forEach(element => 
    {

        if(fullText.includes(element))
        {
            document.getElementsByTagName('textarea')[1].value += element + ' FOUND \n';
        }
        else
        {
            document.getElementsByTagName('textarea')[1].value += element + ' NOT_FOUND \n';
        }

    });

})
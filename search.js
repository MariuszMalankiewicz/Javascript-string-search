class Search
{ 

    constructor(fullTextInput, keywordsListInput, btnSearch)
    {

        this.fullTextInput = fullTextInput;

        this.keywordsListInput = keywordsListInput;

        this.btnSearch = btnSearch;

    }

    keywordsList()
    {
        this.btnSearch.addEventListener('click', ()=>
        {
            const keywordsListArray = this.keywordsListInput.value.split(' ');

            const arrayWithMod_ = keywordsListArray.filter(ele => ele.startsWith('mod_'));

            this.keywordsListInput.value = '';

            arrayWithMod_.forEach(element => 
                {

                    if(this.fullTextInput.value.includes(element))
                    {
                        this.keywordsListInput.value += element + ' FOUND \n';
                    }
                    else
                    {
                        this.keywordsListInput.value += element + ' NOT_FOUND \n';
                    }
            
                });
        })
    }

}

const search = new Search
(
    document.getElementsByTagName('textarea')[0],

    document.getElementsByTagName('textarea')[1],

    document.getElementById('search')

);

search.keywordsList();
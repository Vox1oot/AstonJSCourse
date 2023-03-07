const getPosts = async (page, limit = 10) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${limit}&_page=${page}`);
        const totalCount = response.headers.get('x-total-count');
        const posts = await response.json();
        return { totalCount, posts };
    } catch (error) {
        console.log(error.message);
    }
};

const renderPosts = (posts) => {
    const postsElement = document.querySelector('.posts');
    const nodes = [];

    for (const { body, title } of posts) {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');
        postContainer.innerHTML = `<div class="post__title"><p>Title</p>${title}</div><div class="post__body"><p>Description</p>${body}</div>`;
        nodes.push(postContainer);
    }

    postsElement.replaceChildren(...nodes);
};

const renderPaginator = (totalCount, limit, currentPage) => {
    const buttonsCount = Math.ceil(totalCount / limit);

    const paginatorElement = document.querySelector('.paginator');
    const ulElement = document.createElement('ul');
    ulElement.classList.add('paginator__list');

    for (let i = 1; i <= buttonsCount; i += 1) {
        const liElement = document.createElement('li');

        if (i === 1) {
            liElement.classList.add('paginator__item_active');
        } 
        liElement.classList.add('paginator__item');
        liElement.value = i;
        liElement.innerText = i;
        ulElement.appendChild(liElement);
    }

    ulElement.addEventListener('click', async (event) => {
        const pageNumber = (event.target.value);
        currentPage = pageNumber;

        const prevActiveElement = document.querySelector('li.paginator__item_active');
        prevActiveElement.classList.replace('paginator__item_active', 'paginator__item');

        if (currentPage === pageNumber) {
            const liElement = event.target;
            liElement.classList.add('paginator__item_active');
        }

        const { posts } = await getPosts(pageNumber);
        renderPosts(posts);
    });

    paginatorElement.appendChild(ulElement);
};


const init = async () => {
    let page = 1;
    let limit = 10;

    const { totalCount, posts } = await getPosts(page, limit);

    renderPaginator(totalCount, limit, page);
    renderPosts(posts);
};

init();
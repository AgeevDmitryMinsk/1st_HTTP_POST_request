// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}


//Напишите функцию createPost. В ней должен быть вызов fetch, который:
// делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts;
// с телом — JSON с двумя свойствами title и body;
// со свойством headers с единственным заголовком: 'Content-Type': 'application/json; charset=UTF-8';
// Добавьте fetch два обработчика then:
// чтобы разобрать результат методом json;
// чтобы затем вывести этот результат в консоль.
// напишите код здесь:
function createPost(newPost) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
      userId: 1001,
    }),
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
  })
      .then((res) => res.json())
      .then((post) => {
        console.log(post)
        addPostToDOM(
            document.querySelector('.container'),
            createPostMarkup(post)
        );
      });
}




// обработчик сабмита формы
document.forms.post.addEventListener('submit', function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;



  createPost({
    title: title.value,
    body: text.value
  });
});

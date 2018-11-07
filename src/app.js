// JSX - JavaScript XML

 const app = {
     title: 'Bad Boys',
    subtitle: 'We Ride Together, we Die Together',
    options: []

 };

 const onFormSubmit = (e) => {
     e.preventDefault();

     const option = e.target.elements.option.value;
     if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
     }
 };
 const removeAllOptions = () => {
    app.options= [];
    renderForm();
 };

const onMakeDecision = () =>{
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    console.log(randomNumber);
    alert(option);
};


 const appRoot = document.getElementById('app');

 const renderForm = () => {
 const template = (
    <div>
        <h1>Movie: {app.title}</h1>
        {app.subtitle && <p>subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : "No options" }</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do</button>
        <button onClick={removeAllOptions}> Remove All Options </button>

        <ol>
           {
               app.options.map((option) =>{
                   return <li key={option}>{option} </li>;
               })
           }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add Option</button>
        </form>
    </div>);
    ReactDOM.render(template, appRoot);
 };
renderForm();



    
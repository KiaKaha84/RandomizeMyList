'use strict';

// JSX - JavaScript XML

var app = {
    title: 'Bad Boys',
    subtitle: 'We Ride Together, we Die Together',
    options: []

};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
};
var removeAllOptions = function removeAllOptions() {
    app.options = [];
    renderForm();
};

var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumber];
    console.log(randomNumber);
    alert(option);
};

var appRoot = document.getElementById('app');

var renderForm = function renderForm() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Movie: ',
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            'subtitle: ',
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : "No options"
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should i do'
        ),
        React.createElement(
            'button',
            { onClick: removeAllOptions },
            ' Remove All Options '
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderForm();

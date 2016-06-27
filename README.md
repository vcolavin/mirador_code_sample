Todo list for the todo list:

- make them editable, of course
- style it up a bit?
- decide on what the relationship is between App.jsx and TodoList.jsx. Does TodoList.jsx as it currently exists *need* to exist? It doesn't seem to have any behavior.
- Break the display filter toggles into their own component.
- Is there a nicer way to do that toggling? I'm thinking specifically of that ugly conditional.
- deploy this onto your github pages in order to show it off
- consider the difference between presentational and container components. Is this relevant to the current app?
  - https://css-tricks.com/learning-react-container-components/

here's how to edit:
  - first have a button next to each task that will make it something else, like "hey it's been changed"
  - then you can try and make that edit arbitrary, using a text field
  - then you can hide and show that text field according to some clicking

# Request Header Parser Microservice

This microservice extracts information from the headers of an HTTP request, such as the IP address, language, and software information. It can be used for a variety of use cases, including detecting bots or automated scripts, filtering out spam or unwanted traffic, customizing content based on the user's language or geographic location, and analyzing traffic to gain insights into user behavior.

This project was completed as part of the [`freeCodeCamp curriculum`](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice).

## How to use

To use the microservice, send a GET request to the `/api/whoami` endpoint of the server. The response will be a JSON object with the following keys:

- `ipaddress`: The IP address of the request
- `language`: The preferred language of the user, based on the `Accept-Language` header
- `software`: The software used to generate the request, based on the `User-Agent` header

### User Interface

The microservice also includes a front-end user interface that allows users to interact with the microservice through a web browser. To use the user interface, follow these steps:

1. Visit the root URL of the microservice in your web browser (e.g. `http://your-domain.com/`).
2. Enter a URL in the input field and click the "Submit" button.
3. The microservice will extract the headers from the specified URL and display the results in a JSON format below the form.

A live demo of the front-end user interface is available [here](https://boilerplate-project-headerparser.jmpos7.repl.co/).

## Technologies

This microservice utilizes the following technologies:

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine
- Express: A fast, unopinionated, minimalist web framework for Node.js
- Accepts: A module for parsing HTTP request headers
- Useragent: A module for parsing user agent strings

## License

This project is licensed under the MIT License.

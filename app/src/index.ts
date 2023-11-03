import "./styles/main.scss";
import "htmx.org";

import { createGreetingContainer } from "./greeter/greeter";
import { createBikesContainer } from "./bikes/bikes";

document.body.appendChild(createGreetingContainer());
document.body.appendChild(createBikesContainer());

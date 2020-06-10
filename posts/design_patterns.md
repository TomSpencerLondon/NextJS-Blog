---
title: 'SOLID, 4RSD, Design Patterns and Refactoring'
date: '2020-06-08'
---

###### Cohesion and Coupling
These two simple terms are the main if not the most important way to think about
software. In order to make a judgement about a code-base we can use the extent of coupling
and cohesion to determine whether it is good or not. Cohesion could involve looking at a class
to detaermine to what extent the methods in the class are closely related. Another way to think
about cohesion could involve considering a http request response web controller. On looking at a controller
method you don't want the action to include module related to pdf generation and also a series of procedures
relating to tax calculation since these responsibilities don't belong together. 

Coupling involves looking at modules together and ascertaining to what extent change in one module would necessitate change in another
module. If I changed a function in a class how many other functions would I have to change. 
A tightly coupled codebase can also include examples of temporal coupling. Temporal coupling occurs
when an exact sequence is required for the actions of a class or module otherwise the application will not work.
The more decoupled a method or codebase is the more flexible it is. Connascence is another way of describing coupling. Methods are considered to be connascent when a change in
one place requires the other to be modified.

#### SOLID
Single responsibility is when a class or method only does one thing.
Open for extension and closed for modification means that your system should be open to extend through plugins.
Here we can use interfaces without modifying the code. An example of the Open closed principle could include a library which
is extended through configuration but not itself changed by the configuration within the application to which it has been attached.
The Liskov substitution principle states that if S is subtype of T then an object of  you can assign an object of a given type to an object of another type.

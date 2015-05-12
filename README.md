# Morest Generator

Easily generate a new Morest project, and get started with building an API even quicker!

## Usage

Install `yo`, and `generator-morest`:

`npm install -g yo generator-morest`
Make a new directory, and cd into it:

mkdir my-new-project && cd $_
Run yo morest, optionally passing an app name:

`yo morest [app-name]`

## Generators
Available generators:

- [morest](#app)
- [morest:controller](#controller)
- [morest:model](#model)

### App
Sets up a new Morest application. This will generate all the boilerplate you need to get started, and install the 
required NPM modules, such as Mongoose.

Example:
```
yo morest
```


### Model
Creates a Mongoose model and schema. Produces `app/models/mymodel.js`.

Example:
```
yo morest:model mymodel
```

Optionally you can pass the ``--generate-controller`` flag to also generate a [controller](#Controller).

### Controller
Creates a new controller that will use a model. Produces `app/controllers/mycontroller.js`.

Example:
```
yo morest:controller mycontroller
```

Since model names and controller names should match, it's usually simpler to use the `--generate-controller` flag in 
the [model generator](#Model).

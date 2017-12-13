github-labels-initializer
=====

Remove all labels from a Github repository and create new labels.

## Prepare .env file

Make `.env` file.

```
cp .env.sample .env
```

Set proper values to PERSONAL\_ACCESS\_TOKEN, REPO\_OWNER and REPO\_NAME.

## Customize labels.json

Label should be specified its name and color as below.

```
[
  { "name": "LabelA", "color": "0000ff" },
  { "name": "LabelB", "color": "ff0000" }
]
```

## Execute initializing

```
npm run exec
```

# A File Media Player using HTML `<video />` tag

[Live demo here(Storybook)](https://bragaru-i.github.io/react-compose-player)

~ This is a another media player in react, but with a composition over inheritance pattern.  
~ Still in dev mode

## Goal

Goal of this repo is to create a new react media player that will be a composite "lego" player
and consumer can use any piece of it, regarding to its own needs and saving by its own performance

## Documentation

Components:

- **ReactComposePlayer** - a compose player that contains all lib features
- **BasicPlayer** - basic components for playing. Mounts HTML tag for playing and MediaStore
- **CurrentTiming** - components that adds current time of a played media

### TODO

- [x] Support for media files:
  - [x] Video files (`*.mp4, *.avi`...-> containers with video track)
  - [ ] Audio files(`*.mp3` and others)
  - [ ] Video/audio streams
  - [ ] Youtube
  - [ ] vimeo
- [ ] Automatic documentation(`typedoc`??? )
- [x] Prepare project environment (storybook, linter, prettier)
- [ ] Create media store on a composite level
  - [x] Create a state with `zustand`
  - [ ] Emit HTMLMedia events into new created media store
- [x] Add tests (vitest)
- [x] Create first version and register it to `npm`
  - [x]  Add automatization (Github Actions)
    - [x] Run tests
    - [x] Create storybook on `gihtub pages`
    - [x] Publish new version to `npm`

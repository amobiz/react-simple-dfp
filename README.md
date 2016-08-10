# react-simple-dfp

A simple React component for [DFP - DoubleClick for Publishers](https://www.google.com/dfp).

## Install

```bash
npm install react-simple-dfp
```

## Sample Usage

```jsx
<Dfp adUnitPath='/6355419/Travel' adSize={[728, 90]} adTargeting={{ test: 'infinitescroll' }}/>
```

## Props

### adUnitPath
{string}, required
Full path of the ad unit with the network code and unit code.

#### Example
```json
"/6355419/Travel"
```

### adSize
{array}, required
Width and height of the added slot. This is the size that is used in the ad request if no responsive size mapping is provided or the size of the viewport is smaller than the smallest size provided in the mapping.

#### Example
```json
[728, 90]
```

### adElementId
{string}, optional
ID of the DOM element that will contain this ad unit.

#### Example
```json
"div-gpt-ad-1234567890123-0"
```

### adTargeting
{object}, optional
Sets a custom targeting parameter for this slot. Values set here will overwrite targeting parameters set on the service that this slot uses.

#### Example
```json
{
    "test": "infinitescroll",
    "sport": ["rugby", "rowing"]
}
```

### adStyle
{object}, optional
CSS Style for this component.

#### Example
```json
{
    "padding": "20px",
    "background": "#fff"
}
```

### adCollapse
{bool}, optional
Sets whether the slot component should be hidden when there is no ad in the slot. This overrides the service-level settings.

#### Example
```json
false
```

### onSlotRenderEnded
{func}, optional
This event is fired when a slot on the page has finished rendering. The event is fired by the service that rendered the slot. Example: To listen to companion ads, add a listener to the companionAds service, not the pubads service.

### onImpressionViewable
{func}, optional
This event is fired when an impression becomes viewable, according to the [Active View criteria](https://support.google.com/dfp_premium/answer/4574077).

## Demo

```bash
git clone git@github.com:amobiz/react-simple-dfp.git
cd react-simple-dfp
open index.html
```

## Issues

[Issues](https://github.com/amobiz/react-simple-dfp/issues)

# Similar Projects

* [dfp-events](https://github.com/mcountis/dfp-events)
* [jquery.dfp.js](https://github.com/coop182/jquery.dfp.js)
* [ngDfp](https://github.com/ianmurrays/ngDfp)
* [node-google-dfp](https://github.com/ShinyAds/node-google-dfp)
* [react-dfp](https://github.com/jaanauati/react-dfp)

## License
[MIT](https://opensource.org/licenses/MIT)

## Author
[Amobiz](https://github.com/amobiz)

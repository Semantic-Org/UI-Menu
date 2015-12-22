### Version 2.1.7 - Dec 19, 2015

- **Menu** - Fixed `1px` offset when `attached segment` follows `tabular menu` (max of 2 consecutive segments) [#3479](https://github.com/Semantic-Org/Semantic-UI/issues/3479)
- **Search** - Search now correctly hides menu when an error message inside results is clicked. [#3039](https://github.com/Semantic-Org/Semantic-UI/issues/3039)

### Version 2.1.5 - Nov 1, 2015

- **Dropdown** - Fixed condition where focusing on dropdown would show a blank menu when "no results" was reached and the dropdown was refocused
- **Dropdown** - `search dropdown` will now initialize with `autocomplete="off"` to avoid triggering native autocomplete menu

### Version 2.1.4 - Sep 13, 2015

- **Menu** - Fixed issue where `right menu` was not floating correctly inside a `menu > container` on mobile [#2969](https://github.com/Semantic-Org/Semantic-UI/issues/2969)

#### Features

- **Menu** - Added new `tabular` menu types, `right tabular`, `bottom tabular`, added many new `tabular` menu variables for customizing
- **Menu** - Appearance of `labeled icon menu` has been modified. Horizontal menus now have icons above text, and icons are slightly larger than before.
- **Menu** - `inverted menu` now support `colored` individual items **Thanks @maturano** [#2850](https://github.com/Semantic-Org/Semantic-UI/issues/2850)
- **Menu** - `text menu` now uses padding for hitboxes to make target area for links larger

#### Bugs

- **Dropdown** - Fix `left menu` inside `ui menu` appearing horizontally [#2778](https://github.com/Semantic-Org/Semantic-UI/issues/2778)
- **Dropdown** - Fixed error where menu would disappear when entering spaced words using `allowAdditions: true` caused by value matching its own whitespace-trimed value [#2853](https://github.com/Semantic-Org/Semantic-UI/issues/2853)
- **Menu** - Fixed `(x) column` nested grid with alignment stacking vertically (wrong flex-direction) [#2810](https://github.com/Semantic-Org/Semantic-UI/issues/2810)
- **Menu** - Sub menus now work correctly and are correctly spaced inside `secondary menu` and text menu` [#2862](https://github.com/Semantic-Org/Semantic-UI/issues/2862)
- **Menu** - Fixes tabular menu missing variable for background. **Thanks @frontdevde**
- **Icons** - Fixed issue where `active icon` or `emphasized icon` would not adjust opacity inside menus
- **Menu** - `@pressedItemColor` has been renamed to `@pressedItemTextColor` to match naming conventions of other variables
- **Menu** - Added `flex: 0 0 auto` to menu item to make sure menu do not collapse text content to reduce space
- **Menu** - Fix text align on `dropdown item` inside `icon menu`
- **Menu** - Fixed hybrid initialization not creating `menu` correctly. Fixed docs example of hybrid `<select>` initialization
- **Menu** - Fixed issue with `labeled input` text inside menu not appearing vertically centered

### Version 2.0.5 - July 20, 2015

- **Dropdown** - Fixed issue causing `multiple search dropdown` using [`search` inside menu](http://www.semantic-ui.com/modules/dropdown.html#search-in-menu) to break when multiple [#2666](https://github.com/Semantic-Org/Semantic-UI/issues/2666)

### Version 2.0.4 - July 17, 2015

- **Dropdown** - Fixed `search selection` appearing incorrectly inside menu (default text would not disappear) [#2624](https://github.com/Semantic-Org/Semantic-UI/issues/2624)
- **Menu/Segment/Table** - Consolidated `attached` logic for all components using attached. [#2599](https://github.com/Semantic-Org/Semantic-UI/issues/2599)

### Version 2.0.2 - July 7, 2015

- **Dropdown** - Dropdown icon will now always toggle menu visibility [#2510](https://github.com/Semantic-Org/Semantic-UI/issues/2510)
- **Dropdown** - Clicking on label, or deleting a label will no longer trigger dropdown menu toggling

### Version 2.0.1 - July 6, 2015

- **Dropdown** - Dropdown will now show correctly when menu only includes a message with no other items
- **Menu** - Fixed `pointing menu` arrow color slightly off
- **Menu** - Inverted menu no longer includes a 1px transparent border.
- **Menu** - Fixes `compact vertical menu` using `flex` style incorrectly
- **Menu** - Fixes `border-top` not appearing on `bottom fixed` menu

### Version 2.0.0 - June 30, 2015

- **Menu** - `tiered menu` has been removed in `2.0`. This may be rewritten in the future, but was not up to the standards of the rest of the library and has been removed.
- **Dropdown** - Dropdowns now automatically observe changes in `menu` and will update selector cache with new additions
- **Dropdown** - Added new dropdown variation `scrolling dropdown` and `scrolling menu`, this can be used to include a scrollable section inside a dropdown menu.
- **Dropdown** - Using `page up` and `page down` keys will now scroll menus by a page at a time
- **Multiple UI** - Many components now use flexbox, which means previous confusing fixes like `font-size: 0;` to remove [white-space from inline block](https://css-tricks.com/fighting-the-space-between-inline-block-elements/) is no longer necessary. Removing this hack, now means any element can be a direct child of `grid` or `menu`.
- **Menu** - Menu now uses flexbox. This allows menu items to match each others heights regardless of each items content size. `right menu` content should now follow other menu content instead of preceding it (no longer uses float).
- **Menu** - `vertical tabular menu`, a vertical tab menu, has been added
- **Dropdown** - Nested `scrolling` menus now support keyboard selection, e.g. pressing "A" for apple, and keyboard scrolling.
- **Dropdown** - Added `showOnFocus` option that lets you specify whether dropdown menu should show on focus
- **Dropdown** - Page down and page up now works with dropdown menus
- **Menu** - Add examples/documentation for `fixed menu`
- **Menu** - Added `stackable` menu variation for simple responsive menus
- **Menu** - Added many new variables to menu
- **Menu** - Fixed several inheritance issues for `dropdown item` inside `menu` appearing as `menu item`.
- **Menu** - Horizontal menus now set a default image size for images / logos
- **Menu** - Menus items are now slightly more padded
- **Menu** - The hover/active state of `dropdown item` have been adjusted to match `item`. Dropdown styles can be themed specifically inside `menu`.
- **Menu** - Vertical dropdown menus are no longer 100% `min-width`
- **Button** - Fixed `attached buttons` 1px offset when attached to segment and menu (border vs box shadow border)
- **Dropdown** - `focus` after changing tabs will no longer cause menu to re-open **Thanks @trevorharwell**
- **Dropdown** - Fixes issue with headers disappearing inside of `ui dropdown` when nested in `ui menu`
- **Dropdown** - Fixes `onChange` to fire when input value changes, not just when menu UI changes
- **Dropdown** - Dropdown `menu` now use same font size as dropdown
- **Dropdown** - Fixed border radius on `sub menu` when aligned `left`
- **Dropdown** - Fixed dropdown menu items should not center inside of a center aligned container.
- **Menu** - Fixed menus like `left fixed` `right fixed` are all now class order dependent.
- **Menu** - Fixed 1px border on last element of inline menus like `pagination menu` or `compact menu`
- **Menu** - Fixes divider appears on last element of `(x) item menu`
- **Menu** - Fixed `top attached menu` not having margin-top, and `bottom attached menu` not having `margin-bottom`
- **Menu** - Menu now has a `min-height` that matches standard item padding
- **Menu** - `dropdown menu` in a `secondary pointing menu` or `tabular menu` now receive distinct active styling from other `active item`
- **Menu** - Fixed arrow position in `pointing menu` to be more consistent, round to exact pixels and account for arrow border width
- **Menu** - Fix issue with `pointing` arrow having too high a `z-index` and appearing above `ui dropdown menu`
- **Sidebar** - Last menu item now has a border when sidebar and menu are used together
- **Menu** - Menu now uses `border` for borders instead of `box-shadow`
- **Menu** - `secondary pointing menu` has had some slight design tweaks, thinner lines, more padding
- **Menu** - Active sub-menu items are now `bold`
- **Menu** - Menus no longer have additional borders on `active item` in the default theme
- **Menu** - `tiered menu` has been removed
- **Menu** - Increased contrast on `inverted` menu selection for legibility

### Version 1.12.2 - May 4, 2015

- **Dropdown** - Fixed `left` and `right` arrow does not move input cursor with `visible selection dropdown`. Event accidentally prevented by `sub menu` shortcut keys.

### Version 1.11.6 - March 27, 2015

- **Menu/Dropdown** - Fix dropdown headers disappearing inside menus

### Version 1.11.5 - March 23, 2015

- **Dropdown** - Fixes IE10 scrollbar width in menu (calc was being precompiled in LESS) **Thanks @gabormeszoly**

### Version 1.11.0 - March 3, 2015

- **Menu** - Horizontal menus now use flexbox so they can resize automatically to content size.
- **Menu** - `ui tiered menu` has been deprecated. It has been removed from the docs, and will be removed eventually in `2.0`
- **Input** - Fix bug with vertical centering of `ui action input` inside `menu` due to `flexbox` changes
- **Menu** - Fix vertical pointing menu, sub menu arrow color

### Version 1.10.3 - February 27, 2015

- **Menu** - Fixes dropdown menu item not having a hover state inside inverted menu

### Version 1.10.0 - February 23, 2015

- **Menu** - Fixes pointing menu displaying under dropdown menu

### UI Changes

- **Dropdown** - `search selection dropdown` will now close the menu when a `dropdown icon` is clicked

### Version 1.8.0 - January 23, 2015

- **Dropdown** - Keyboard navigation will now allow opening of sub menus with right/left arrow. Enter will open sub-menus on an unselectable category (`allowCategorySelection: false`) as well.
- **Dropdown** - Mutation observers will now observe changed in `<select>` values after initialization, and will automatically update dropdown menu when changed
- **Dropdown** - Dropdown no longer will not show menu when no `item` are present in menu. Dropdown will now only filter results for `ui search dropdown` #1632 **Thanks PSyton**.
- **Dropdown** - Fixed bug where link items would not open in sub-menus due to `event.preventDefault`
- **Label** - Fixed `ui corner label` appearing on-top of `ui dropdown` menu due to issue in z-index hierarchy
- **List** - `relaxed list` and `very relaxed list` no longer add padding to child menu items

### Version 1.7.0 - January 14, 2015

- **Dropdown** - New `upward dropdown` variation, which opens its menu upward. Default animation now uses ``settings.transition = 'auto'` and determines direction of animation based on menu direction
- **Dropdown** - Fixed bug where sub menus may sometimes have dropdown icon overlap text
- **Dropdown** - Fixes dropdown search input from filtering text values when input is inside menu, i.e "In-Menu Search"
- **Segment** - ``ui tabular menu`` now correctly aligns with attached segment when using fluid variation *Thanks @MohammadYounes*
- **List** - Fix some styling issues with `ui list` inside `ui menu`

### Version 1.6.2 - January 06, 2015

- **Menu** - Fixes ``fluid text menu`` to have correct margins

### Version 1.6.0 - January 05, 2015

- **Menu** - Fixes ``ui fluid labeled icon menu`` to not have `min-width`

### Version 1.5.0 - December 30, 2014

- **Dropdown** - New setting ``allowCategorySelection`` lets menu items with sub menus be selected. Added example in docs.
- **Menu** - ``ui fixed menu`` now defaults to ``ui top fixed menu``

### Version 1.4.0 - December 22, 2014

- **Menu** - Fix border radius of dropdown menu inside `ui vertical menu`
- **Menu** - Fix formatting of ``ui selection dropdown`` inside ``menu``

### Version 1.3.0 - December 17, 2014

- **Dropdown** - Dropdown can now specify which direction a menu should appear left/right, dropdown icons can also appear on the left
- **Dropdown** - Dropdown now always scrolls to active element on menu open, calculates position with new ``loading`` class
- **Dropdown** - Fix bug in position of sub menus with ``floating dropdown``

### Version 1.1.0 - December 02, 2014

- **Menu/Segment** Fixes double border on pointing menu with attached segment **Thanks davialexandre**

### Version 1.0.1 - November 28, 2014

- **Menu** - Removes missing image loader variable **Thanks ryan-mahoney**

### Version 1.0.0 - November 24, 2014

- **Dropdown** - Sub menus inside dropdowns now need a wrapping div **text** around sub-menu descriptions

### Version 0.19.0 - July 3, 2014

- **Accordion** - Fixes incompatibilities with ``ui list`` when used inside a ``ui accordion``, fixes issues with menu accordion display in some circumstances
- **Menu** - Fixes ``ui inverted secondary pointing menu`` to have correct pointer color for all color variations **Thanks AdamMaras**
- **Docs** - Language clarified for menu/rating definition **Thanks jnbt/ewiner**

### Version 0.18.0 - June 6, 2014

- **Menu** - Fixes bug where pointing menu would sometimes appear below content **Thanks Skysplit**

### Version 0.15.2 - Mar 28, 2014

- **Menu** - Fixes formatting of attached segments with menus

### Version 0.13.0 - Feb 20, 2014

- **Menu** - Fixes 2px border on last element in horizontal menus
- **Menu** - Fixes dropdown formatting when used **inside* a menu item
- **Menu** - Fixes formatting of grouped icon buttons inside menus

### Version 0.12.2 - Jan 21, 2014

- **Menu** - Slightly updates input sizes inside menus

### Version 0.12.1 - Jan 15, 2014

- **Menu** - Fixes buttons using ``<a>`` tag from inheriting link styles. **thanks joltmode**
- **Menu** - Fixes ``action input`` to work inside menus  **thanks joltmode**

### Version 0.12.0 - Jan 06, 2014

- **Menu** - Fixed menu now adds padding on the next element if it is a grid
- **Menu** - Fixes z-index on fixed menu to exist just below modals

### Version 0.9.0 - Nov 5, 2013

- **Menu** - Dropdown position inside secondary menus should be more precise
- **Menu** - Floating dropdown menus now work inside menus
- **Menu** - Fixes some inverted menu stylings not applying correctly in some instances

### Version 0.8.6 - Nov 2, 2013

- Fixes bug in jquery waypoint 2.0.3 causing menus to be lame

### Version 0.8.2 - Oct 28, 2013

- **Menu** - Fixes arrow direction on vertical menu dropdown

### Version 0.7.0 - Oct 22, 2013

- **Dropdown** - Fixes pointing dropdown to appear correctly in menu
- **Menu** - Fixes border radius on tabular menu, fixes one pixel jump on active state
- **Menu** - Removes vertical label width missing units in menu

### Version 0.6.3 - Oct 15, 2013

- Dropdown hide no longer selects current item as active (useful for menus)

### Version 0.6.2 - Oct 15, 2013

- Fixes input position inside menus with no other content
- Fixes input sizing on small/large menus

### Version 0.6.1 - Oct 15, 2013

- Adds automatic menu formatting for buttons inside menus
- Dropdowns in vertical menu automatically receive proper triangle pointer direction
- Fixes right menu formatting in secondary menus
- Fixed shadow overlap on dropdown in menus

### Version 0.3.2 - Oct 2, 2013

- Dropdown now formats top and right arrow icons automatically with icon coupling with sub menus
- Fixes position of menu dropdowns in some cases
- Fixes icon input inside a menu placement issues

### Version 0.1.0 - Sep 25, 2013

- Adds horizontally padded, vertically padded menu item variations to allow menu items to remove padding
- Added fixes to tabular menu especially with attached content
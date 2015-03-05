### Version 1.11.0 - March 3, 2015

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
- **Label** - Fixed `ui corner label` appearing on-top of `ui dropdown` menu due to issue in z-index heirarchy
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
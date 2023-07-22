# Frontend Background
> Good to have knowledge about frontend

## Node Heights (And Widths), Overflow, Scrolling, And IOS Edge Cases
- Node heights, overflow, and scrolling are intrinsically connected, as well as with some IOS edge cases
- This section introduces how exactly node height, overflow, and scrolling works, and one IOS edge case this affects

### Node Heights
- A node can either have absolute height (`height` is set to px or vh or some unit), relative height (like 50%), or auto height (`height` is undefined or set to `auto`)
- We define that a node has **set height** if the browser knows its height. This happens when either it has absolute height, or, it has relative height, and its parent has set height
- For a relative height (`height: 50%`) rule to take effect, the element's parent must have set height. This means that if you want an element to have relative height, all its ancestors up to the first ancestor with absolute height, must also have relative height
- We define a node's **actual height** to be its height as given by inspect element (or if you give it a coloured background, that will fill up its actual height)
  - This is the node's set height if it has set height, or if it has auto height this will be calculated from its children heights

### Overflow Definitions
- A node is **overflowed by [items]** if it has set height and the [items] have taller actual height than the set height of the node
  - Note that a node with auto height CANNOT be overflowed
- We define **overflowing [items]** to be the [items] that overflow a node

### Scrolling
- We define the **scroll container** to be the node that has the `overflow-y: scroll` css rule
  - This is the container that contains all the scrollable stuff
- Our `body` node is the designated page scroll container
  - The `body` element should **always** be the page scroll container
- We invoke scrolling when a node is longer than the body height. This can happen in 2 cases:
  1. The node itself has longer actual height than the body
  2. The node (having overflow: visible) has actual height <= body height, but is overflowed by descendants which have actual height > body height
- Thus in our app, scrolling works as follows:
  - We give the App component absolute height
  - Our Page Wrappers under it have set height given by the HeightWithNavbar mixin
  - There can be many layers of wrappers with `height: 100%`
  - At some point there will be a node with `height: auto`, with children that overflow it
  - This causes the BODY node to show a scrollbar and enable scrolling of the entire thing

### IOS Edge Case
- Bad things happen in 2 cases:
  - A node is overflowed by its direct children
  - A node is overflowed by a `height: auto` child, and that child is large because it contains many children
- On IOS Safari, this causes the many children causing the overflow to be compressed
- To resolve this, make sure to set `flex-shrink: 0` and `height: auto` on any node that could contain overflowing direct children
  - Then, the parent of the overflowed node can have set height (overflow: visible is default)

### A Note on Node Widths
- Recall that `height: auto` usually makes a calculation based on children heights (the height of a parent with `height: auto` usually depends on the height of its children)
- Note that `width: auto` actually behaves differently - a node with `width: auto` usually takes on the width of its parent
- Thus while we must have a "chain" of nodes with `height: x%` if we want descendant nodes to be able to use relative height, we don't actually need this in a lot of cases for width
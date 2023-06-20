---
kindle-sync:
    bookId: '62271'
    title: Learn Cocoa on the Mac (Books for Professionals by Professionals)
    author: 'Jack Nutting, Dave Mark, and Jeff LaMarche'
    asin: B001NLL82O
    lastAnnotatedDate: '2015-06-26'
    bookImageUrl: 'https://m.media-amazon.com/images/I/415LGamrIPL._SY160.jpg'
    highlightsCount: 69
date: 2023-05-22 19:10
last_modified_at: 2023-05-22 19:10
---

# Learn Cocoa on the Mac

## Metadata

-   Author: [Jack Nutting, Dave Mark, and Jeff LaMarche](https://www.amazon.comundefined)
-   ASIN: B001NLL82O
-   Reference: https://www.amazon.com/dp/B001NLL82O
-   [Kindle link](kindle://book?action=open&asin=B001NLL82O)

## Highlights

In an editable text field, the placeholder is that gray text you see in some text fields when they are empty, which tells you what the field is for. — location: [444](kindle://book?action=open&asin=B001NLL82O&location=444) ^ref-50577

---

handles. The label's attributes (the size of its font in particular) determine the vertical size of the label. — location: [456](kindle://book?action=open&asin=B001NLL82O&location=456) ^ref-2266

---

By default, labels are not selectable, — location: [465](kindle://book?action=open&asin=B001NLL82O&location=465) ^ref-49877

---

When creating applications that will be distributed to others, it is important to realize that you could select fonts that your user won't have installed. In general, for standard GUI components, you're probably better not changing the fonts at all. Consistent font usage is an important part of the GUI consistency that the Mac is known for. — location: [486](kindle://book?action=open&asin=B001NLL82O&location=486) ^ref-30531

---

Most labels, buttons, and other controls use the Lucida Grande font by default. — location: [488](kindle://book?action=open&asin=B001NLL82O&location=488) ^ref-19481

---

For items you will never use, the best approach is just to delete them. — location: [503](kindle://book?action=open&asin=B001NLL82O&location=503) ^ref-30177

---

You should create your original file at a size of 512×512 pixels, and save it in a standard image format that supports alpha channels (transparency) such as TIFF, PSD, or PNG. — location: [533](kindle://book?action=open&asin=B001NLL82O&location=533) ^ref-8233

---

let you specify different images for different sizes. This is a handy feature if you've got details in the 512×512 image that are important but which won't be readable at smaller sizes. In that situation, you can create a slightly different version for the smaller sizes to make sure that the important details can be seen no matter what icon size is used. Figure — location: [535](kindle://book?action=open&asin=B001NLL82O&location=535) ^ref-58484

---

Most of the time, you will want to do copy the file into your project folder, as it keeps all the resources for your project together. However, if you share resources among more than one project, then you may want to leave this checkbox turned off, which will cause Xcode to reference the file from its original location. — location: [555](kindle://book?action=open&asin=B001NLL82O&location=555) ^ref-15007

---

Using Objective-C 2.0 in a Cocoa application makes the application only work on Mac OS X Leopard (10.5), Mac OS X Snow Leopard (10.6), or later versions. — location: [663](kindle://book?action=open&asin=B001NLL82O&location=663) ^ref-62556

---

Model: The classes that hold your application's data. ■ View: Made up of the windows, controls, and other elements that the user can see and interact with. ■ Controller: Binds the model and view together and contains the application logic that determines how to handle the user's inputs. — location: [711](kindle://book?action=open&asin=B001NLL82O&location=711) ^ref-31987

---

The goal of MVC is to make the objects that implement these three types of code as distinct from one another as possible. Any object you write should be readily identifiable as belonging to one of the three categories, with little or no functionality within it that could be classified within either of the other two. — location: [715](kindle://book?action=open&asin=B001NLL82O&location=715) ^ref-63165

---

When you write Cocoa applications, you will primarily create your view components using Interface Builder, although you will sometimes also modify your interface from code, or you might subclass existing view and control classes to create new ones. — location: [721](kindle://book?action=open&asin=B001NLL82O&location=721) ^ref-57735

---

Your model will be created using something called Core Data or crafting Objective-C classes to hold your application's data. — location: [723](kindle://book?action=open&asin=B001NLL82O&location=723) ^ref-43725

---

Your controller component will typically be comprised of classes that you create and that are specific to your application. — location: [726](kindle://book?action=open&asin=B001NLL82O&location=726) ^ref-57999

---

Actions are methods we write that can be executed directly as a result of user interaction, such as at the click of a button. ■ Outlets are pointers to objects in our nib file. Outlets allow us to access objects in the nib from our code. — location: [734](kindle://book?action=open&asin=B001NLL82O&location=734) ^ref-39074

---

Outlets are Objective-C instance variables that are declared using a special keyword: IBOutlet. An outlet is really nothing more than an object pointer that can be linked to an object in your user interface. — location: [739](kindle://book?action=open&asin=B001NLL82O&location=739) ^ref-1122

---

Actions are Objective-C methods that can be invoked directly from your application's user interface. — location: [760](kindle://book?action=open&asin=B001NLL82O&location=760) ^ref-23628

---

Action methods are one area where Cocoa and Cocoa Touch are different. In Cocoa Touch, action methods can have one of three different method signatures, taking either zero, one, or two arguments. This is not the case for actions in Cocoa, which must take one and only one argument. — location: [772](kindle://book?action=open&asin=B001NLL82O&location=772) ^ref-59890

---

They're good old-fashioned C pre-processor macros. — location: [777](kindle://book?action=open&asin=B001NLL82O&location=777) ^ref-30320

---

These two keywords do absolutely nothing as far as the compiler is concerned. IBOutlet gets entirely removed from the code before the compiler ever sees it. IBAction resolves to a void return type, which just means that action methods do not return a value. — location: [779](kindle://book?action=open&asin=B001NLL82O&location=779) ^ref-59957

---

They are used by Interface Builder. Interface Builder uses these keywords to parse out the outlets and actions available to it. Interface Builder can only see methods that are prefaced with IBAction and can only see variables or properties that are prefaced with IBOutlet. Also, the presence of these keywords tells other programmers, looking at your code in the future, that the variables and methods in question aren't dealt with entirely in code. They'll need to delve into the relevant nib file to see how things are hooked up and used. — location: [782](kindle://book?action=open&asin=B001NLL82O&location=782) ^ref-37180

---

Objective-C 2.0 includes support for garbage collection (usually abbreviated "GC"). — location: [792](kindle://book?action=open&asin=B001NLL82O&location=792) ^ref-45210

---

Double-clicking the root node in the Groups & Files pane brings up the Project Info window — location: [795](kindle://book?action=open&asin=B001NLL82O&location=795) ^ref-42771

---

Choose All Configurations from the Configuration popup list, so that the change we're about to make will be applied to every way we might build our application (with or without code optimizing, and so on). — location: [799](kindle://book?action=open&asin=B001NLL82O&location=799) ^ref-63774

---

On today's powerful computer systems, the overhead associated with garbage collection is practically meaningless, and on multi-core and multi-processor machines, garbage collection can actually result in applications that perform better than those requiring manual memory management, because the garbage collector will take advantage of unused cores or processors for recovering memory. — location: [807](kindle://book?action=open&asin=B001NLL82O&location=807) ^ref-14545

---

method. Interface Builder only looks at the header (.h) file when it looks for the IBOutlet and IBAction keywords, so once we've declared the action and outlet in this file, Interface Builder will be able to find them. — location: [840](kindle://book?action=open&asin=B001NLL82O&location=840) ^ref-42064

---

adding an icon to this window here automatically results in an object instance getting created when the application launches. — location: [869](kindle://book?action=open&asin=B001NLL82O&location=869) ^ref-18931

---

The first icon in any nib file is called File's Owner. This icon is a proxy that points to the object instance that loaded the nib from disk or, in other words, the object instance that "owns" the nib. — location: [876](kindle://book?action=open&asin=B001NLL82O&location=876) ^ref-17243

---

the First Responder icon gives you a convenient way to interact with whatever control or view currently has the focus without having to write code to determine which control or view that is. — location: [883](kindle://book?action=open&asin=B001NLL82O&location=883) ^ref-8535

---

This object points to this application's one and only instance of NSApplication. — location: [886](kindle://book?action=open&asin=B001NLL82O&location=886) ^ref-33772

---

If we provide a value in this field, our application will automatically save the location, size, and other information about the window in our user preferences so that when the user launches the application again, he or she will find the window exactly where it was left. It doesn't matter what value you put here, as long as it is unique. If you use the same autosave name for any two objects, one of them will fail to save. — location: [920](kindle://book?action=open&asin=B001NLL82O&location=920) ^ref-20304

---

The Close checkbox enables or disables the ability to close the window. — location: [924](kindle://book?action=open&asin=B001NLL82O&location=924) ^ref-24393

---

If you allow the window to be closed, you should provide a way to make the window visible again. — location: [927](kindle://book?action=open&asin=B001NLL82O&location=927) ^ref-14051

---

Alternatively, if your application is a utility that consists of only one window, it is acceptable to have the application quit when the window is closed. — location: [927](kindle://book?action=open&asin=B001NLL82O&location=927) ^ref-45115

---

As a general rule, windows should be able to be minimized. There are exceptions to this, such as utility windows that are only visible when your application is front-most, but the vast majority of the time you should leave this checked. — location: [931](kindle://book?action=open&asin=B001NLL82O&location=931) ^ref-27346

---

Resize, and it controls whether the user can change the size of the window by dragging the lower right corner. — location: [933](kindle://book?action=open&asin=B001NLL82O&location=933) ^ref-47968

---

The coordinate system on your Mac's screen has 0 at the lower-left corner of the screen, with the y value getting higher as you move up toward the top of the screen. The problem here is that not everybody has the same size monitor, so any given y value will be different relative to the top of the screen on different size monitors. Fortunately, Cocoa will automatically adjust the window's position so that the window always starts on the screen, even if the location you specify would otherwise place it offscreen somewhere, and because we gave the window an autosave name, every time the user launches the application after the first, the window will be where it was when he last quit the application. — location: [945](kindle://book?action=open&asin=B001NLL82O&location=945) ^ref-21828

---

The little grey triangles on all four sides of the white box let you lock the position of the window relative to the sides of the screen. — location: [953](kindle://book?action=open&asin=B001NLL82O&location=953) ^ref-1078

---

Each outlet can be linked to only a single interface item. — location: [1024](kindle://book?action=open&asin=B001NLL82O&location=1024) ^ref-521

---

interface items can be connected to the same action method. — location: [1025](kindle://book?action=open&asin=B001NLL82O&location=1025) ^ref-62635

---

Expand the Other Sources folder in the Groups & Files pane, and single-click on main.m. In that file is our application's main() function, which is the function that gets called when our application is launched. This function contains only one line of code, which calls a function named NSApplicationMain(). That function, which is part of Cocoa, automatically creates an instance of NSApplication for us. That instance of NSApplication goes into a loop and continuously polls for events from the keyboard, mouse, operating system, and other applications and responds to those events — location: [1052](kindle://book?action=open&asin=B001NLL82O&location=1052) ^ref-7491

---

NSApplication allows you to specify an optional object to act as its delegate. Simply put, a delegate is a class that handles certain tasks on behalf of another class. — location: [1058](kindle://book?action=open&asin=B001NLL82O&location=1058) ^ref-50242

---

The application delegate can be of any instance of any class, but only one object can be the application delegate. — location: [1060](kindle://book?action=open&asin=B001NLL82O&location=1060) ^ref-42848

---

it's fairly common practice to have the application's main window controller do double-duty as the application delegate. — location: [1063](kindle://book?action=open&asin=B001NLL82O&location=1063) ^ref-53876

---

method we just implemented exists to let us change the behavior of NSApplication without subclassing it. — location: [1075](kindle://book?action=open&asin=B001NLL82O&location=1075) ^ref-40812

---

It's worth your time to spend a few minutes looking over the application delegate methods so you'll know what's there. — location: [1087](kindle://book?action=open&asin=B001NLL82O&location=1087) ^ref-25375

---

Most of the Cocoa user interface classes are, technically, both views and controls, at least in the Cocoa sense; — location: [1149](kindle://book?action=open&asin=B001NLL82O&location=1149) ^ref-4822

---

NSView is a class that allows drawing on the screen, and NSControl is a subclass of NSView that extends it by responding to user events, triggering an action in a target, and so on. — location: [1149](kindle://book?action=open&asin=B001NLL82O&location=1149) ^ref-39926

---

try to remember that a "control" is a particular kind of view, whereas a "controller" is an object in the controller layer that coordinates between view and model objects. — location: [1152](kindle://book?action=open&asin=B001NLL82O&location=1152) ^ref-29109

---

retain means that the value passed into setVillain: will be retained). — location: [1184](kindle://book?action=open&asin=B001NLL82O&location=1184) ^ref-59856

---

this @synthesize declaration creates a pair of methods for getting and setting the villain property, following the semantics defined in the header. — location: [1188](kindle://book?action=open&asin=B001NLL82O&location=1188) ^ref-15114

---

If you choose to @synthesize the getters and setters like we just did, then you know that you're accessing your instance variables in a way that is standardized and future-proof. — location: [1194](kindle://book?action=open&asin=B001NLL82O&location=1194) ^ref-5315

---

Remember, an outlet is nothing more than a specially-marked instance variable, and an action is simply any method that matches a specific signature, taking a single parameter of type id and returning void. — location: [1203](kindle://book?action=open&asin=B001NLL82O&location=1203) ^ref-40807

---

there is no action method defined for the NSTextView used for editing our notes attribute. The reason for this is that NSTextView doesn't actually work with the target/action paradigm. Instead, it informs its delegate when changes are made to its content. — location: [1215](kindle://book?action=open&asin=B001NLL82O&location=1215) ^ref-33145

---

One of the biggest reasons for using properties is to properly handle instance variables that change at run-time, by ensuring that the getters and setters in a object are correctly implemented using the @synthesize keyword. — location: [1218](kindle://book?action=open&asin=B001NLL82O&location=1218) ^ref-15481

---

The outlets that point to our GUI controls will not change after the nib file is loaded, so there's no point going through the motions of making those into properties as well. — location: [1220](kindle://book?action=open&asin=B001NLL82O&location=1220) ^ref-25158

---

As of this writing, the default size of a new NSLevelIndicator dragged from the Library is wide enough to show just over 7 stars, and no more. — location: [1312](kindle://book?action=open&asin=B001NLL82O&location=1312) ^ref-60549

---

Fortunately, Interface Builder provides a handy short cut that can help you "right-size" a view to make it snugly fit around its content. — location: [1313](kindle://book?action=open&asin=B001NLL82O&location=1313) ^ref-65057

---

radio buttons are normally a group of NSButtonCell instances aligned inside an NSMatrix. You can find these preconfigured in the Library window by typing "radio" into the search field. This will show you a Radio Group. — location: [1328](kindle://book?action=open&asin=B001NLL82O&location=1328) ^ref-20316

---

try holding down the option key while dragging the bottom-center resize handle downward. That will simultaneously resize the matrix, and add new buttons inside to fill the empty space. — location: [1332](kindle://book?action=open&asin=B001NLL82O&location=1332) ^ref-10693

---

You may notice at some point that many of Cocoa's GUI classes seem to have a "shadow" in the form of a Cell class: NSButton has NSButtonCell, and so on. This division stems from performance issues in the past. In order to speed up drawing, some of the drawing duty was taken out of view classes, and put into special "cell" classes instead. So in an NSMatrix full of buttons, instead of having a bunch of full-fledged NSButton instances, there is a bunch of simpler NSButtonCell instances. — location: [1334](kindle://book?action=open&asin=B001NLL82O&location=1334) ^ref-19636

---

Text fields and some other objects have a delegate outlet that can be used to extend their functionality in certain ways, — location: [1517](kindle://book?action=open&asin=B001NLL82O&location=1517) ^ref-38096

---

Objects that are loaded from the application's main nib file are always in a special predicament: they are being initialized as a substep in the application's own initialization routine, which means that at the time init is called on any object in the main nib file, the NSApplication itself may not be fully initialized! This has lots of repercussions, especially where the user interface is concerned, so often it's best to postpone our initialization until everything is truly ready. — location: [1553](kindle://book?action=open&asin=B001NLL82O&location=1553) ^ref-10220

---

We want this method to be accessible from anywhere in our class, but not from the outside. One way to do this is to declare the method as part of a category, with the interface declaration made "private" by virtue of its presence in VillainTrackerAppDelegate's .m file, rather than its .h file. — location: [1574](kindle://book?action=open&asin=B001NLL82O&location=1574) ^ref-41428

---

This is a class method instead of an instance method (indicated by an initial "+" instead of "-"), so everything that happens in here applies to the whole class, no matter how many instances we may create. This is appropriate in many situations where the method doesn't deal with anything specific to an instance (for example, instance variables). — location: [1616](kindle://book?action=open&asin=B001NLL82O&location=1616) ^ref-46196

---

a principle called "lazy loading." Instead of creating the array when the class is initialized, we only create it the first time it's needed. That way, in case no one ever calls this method, the array is never created. — location: [1622](kindle://book?action=open&asin=B001NLL82O&location=1622) ^ref-39590

---

Action methods always pass along a "sender" object, which is normally the object that the user clicked or edited, triggering the method call. If your action method may be triggered by more than one GUI object, you can determine which object it came from by examining sender, comparing it to your instance variables, and so on. — location: [1680](kindle://book?action=open&asin=B001NLL82O&location=1680) ^ref-7471

---

We're creating a copy of the result we get from notesView's string method. The reason for this is that internally, an NSTextView hangs onto a string of its own for editing and display, and its string method actually returns a pointer to that internal string object. If we don't make a copy we're going to end up with that string being referenced directly by our villain, which can lead to confusion later on, when we are switching between different villains being displayed by these GUI objects. We'd end up assigning the same string to several villains, and editing any villain's notes would simultaneously edit all of them! NSTextField doesn't cause us these sorts of problems, since its stringValue method already gives us a copy instead of passing along its internal string object. — location: [1705](kindle://book?action=open&asin=B001NLL82O&location=1705) ^ref-18392

---

## Non-Kindle Data

### [Books MOC](Books%20MOC.md)

#reviewed 

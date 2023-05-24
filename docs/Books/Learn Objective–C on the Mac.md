---
kindle-sync:
  bookId: '14643'
  title: Learn Objective–C on the Mac (Learn Series)
  author: Scott Knaster and Mark Dalrymple
  asin: B001NLL7VG
  lastAnnotatedDate: '2014-03-15'
  bookImageUrl: 'https://m.media-amazon.com/images/I/415+4uD8huL._SY160.jpg'
  highlightsCount: 221
---
# Learn Objective–C on the Mac
## Metadata
* Author: [Scott Knaster and Mark Dalrymple](https://www.amazon.comundefined)
* ASIN: B001NLL7VG
* Reference: https://www.amazon.com/dp/B001NLL7VG
* [Kindle link](kindle://book?action=open&asin=B001NLL7VG)

## Highlights
The .m extension originally stood for “messages” when Objective-C was first introduced, referring to a central feature of Objective-C — location: [291](kindle://book?action=open&asin=B001NLL7VG&location=291) ^ref-25846

---
#import is a feature provided by the GCC compiler, — location: [298](kindle://book?action=open&asin=B001NLL7VG&location=298) ^ref-37414

---
#import guarantees that a header file will be included only once, no matter how many times the #import directive is actually seen for that file. — location: [299](kindle://book?action=open&asin=B001NLL7VG&location=299) ^ref-19855

---
In C, programmers typically use a scheme based on the #ifdef directive to avoid the situation where one file includes a second file, which then, recursively, includes the first. — location: [301](kindle://book?action=open&asin=B001NLL7VG&location=301) ^ref-50857

---
A framework is a collection of parts—header files, libraries, images, sounds, and more—collected together into a single unit. — location: [306](kindle://book?action=open&asin=B001NLL7VG&location=306) ^ref-64849

---
it speeds up the task by using precompiled headers, a compressed and digested form of the header that’s loaded quickly when you #import it. — location: [322](kindle://book?action=open&asin=B001NLL7VG&location=322) ^ref-26770

---
(/System/Library/Frameworks/Foundation.framework/ Headers/ — location: [324](kindle://book?action=open&asin=B001NLL7VG&location=324) ^ref-9058

---
It turns out that Cocoa prefixes all its function, constant, and type names with “NS”. This prefix tells you the function comes from Cocoa instead of some other toolkit. — location: [337](kindle://book?action=open&asin=B001NLL7VG&location=337) ^ref-12245

---
example? Well, the “NS” prefix dates back from the time when the toolkit was called NextSTEP and was the product of NeXT Software (formerly NeXT, Inc.), — location: [344](kindle://book?action=open&asin=B001NLL7VG&location=344) ^ref-31355

---
Many people prefix names with their initials or company names. — location: [350](kindle://book?action=open&asin=B001NLL7VG&location=350) ^ref-13154

Use AIM? Or IM?

---
One mistake that’s easy to make is to pass a C-style string to NSLog() instead of one of the fancy NSString @“strings” elements. If you do this, the compiler will give you a warning: If you run this program, it might crash. — location: [365](kindle://book?action=open&asin=B001NLL7VG&location=365) ^ref-21327

---
To catch problems like this, you can tell Xcode to always treat warnings as errors. — location: [368](kindle://book?action=open&asin=B001NLL7VG&location=368) ^ref-63136

---
This is a handy function to have around when you want to print out a human-readable representation of BOOL values. — location: [399](kindle://book?action=open&asin=B001NLL7VG&location=399) ^ref-33091

---
It’s a good idea never to compare a BOOL value directly to YES, because too-clever programmers sometimes pull stunts similar to areIntsDifferent_faulty(). — location: [424](kindle://book?action=open&asin=B001NLL7VG&location=424) ^ref-22614

---
when you print the values of arbitrary objects with NSLog(), you’ll use the %@ format specification. — location: [453](kindle://book?action=open&asin=B001NLL7VG&location=453) ^ref-37945

---
When you use this specifier, the object supplies its own NSLog() format via a method named description. The description method for NSString simply prints the string’s characters. — location: [453](kindle://book?action=open&asin=B001NLL7VG&location=453) ^ref-57660

---
Indirection is a fancy word with a simple meaning—instead of using a value directly in your code, use a pointer to the value. — location: [494](kindle://book?action=open&asin=B001NLL7VG&location=494) ^ref-40793

---
Here’s a hint: look in the Targets area in the Groups & Files pane. — location: [577](kindle://book?action=open&asin=B001NLL7VG&location=577) ^ref-20796

There's a target called:
Copy words.txt to tmp

---
Launch arguments, also called command-line parameters, are a little trickier to control from Xcode than from Terminal. Here’s what you need to do to change the launch arguments: — location: [608](kindle://book?action=open&asin=B001NLL7VG&location=608) ^ref-53737

---
when you declare a variable that’s a structure, you can initialize all the elements of that structure at once. — location: [651](kindle://book?action=open&asin=B001NLL7VG&location=651) ^ref-21316

---
It’s disappointingly easy to pass a rectangle to a function meant to work with circles. — location: [672](kindle://book?action=open&asin=B001NLL7VG&location=672) ^ref-60449

---
nothing more than a fancy C struct that has the ability to find code it’s associated with, usually via a function pointer. — location: [701](kindle://book?action=open&asin=B001NLL7VG&location=701) ^ref-24432

---
it stands for identifier, and it’s pronounced “eye dee.” An id is a generic type that’s used to refer to any kind of object. — location: [715](kindle://book?action=open&asin=B001NLL7VG&location=715) ^ref-52723

---
In Objective-C, square brackets have an additional meaning: they’re used to tell an object what to do. — location: [728](kindle://book?action=open&asin=B001NLL7VG&location=728) ^ref-15016

---
In Objective-C, telling an object to do an action is called sending a message (although some folks also say “calling a method”). The code [shape draw] sends the message draw to the object shape. — location: [731](kindle://book?action=open&asin=B001NLL7VG&location=731) ^ref-478

---
One way to pronounce [shape draw] is “send draw to shape.” — location: [732](kindle://book?action=open&asin=B001NLL7VG&location=732) ^ref-55921

---
having class objects is a great advantage: if you change the class at runtime, all objects of that class automatically pick up the changes — location: [742](kindle://book?action=open&asin=B001NLL7VG&location=742) ^ref-3984

---
Objective-C, as it asks the objects which class they belong to. This reduces the chance of calling the wrong function and makes our code easier to maintain. — location: [760](kindle://book?action=open&asin=B001NLL7VG&location=760) ^ref-42945

---
A class is a structure that represents an object’s type. — location: [764](kindle://book?action=open&asin=B001NLL7VG&location=764) ^ref-62843

---
An object is structure containing values and a hidden pointer to its class. — location: [767](kindle://book?action=open&asin=B001NLL7VG&location=767) ^ref-4320

---
Instance is another word for “ — location: [769](kindle://book?action=open&asin=B001NLL7VG&location=769) ^ref-9935

---
A message is an action that an object can perform. — location: [770](kindle://book?action=open&asin=B001NLL7VG&location=770) ^ref-8434

---
A method is code that runs in response to a message. — location: [773](kindle://book?action=open&asin=B001NLL7VG&location=773) ^ref-65217

---
The method dispatcher is the mechanism used by Objective-C to divine which method will be executed in response to a particular message. — location: [774](kindle://book?action=open&asin=B001NLL7VG&location=774) ^ref-27396

---
The interface is the description of the features provided by a class of objects. — location: [778](kindle://book?action=open&asin=B001NLL7VG&location=778) ^ref-6785

---
The implementation is the code that makes the interface work. — location: [784](kindle://book?action=open&asin=B001NLL7VG&location=784) ^ref-5562

---
In larger programs, you’ll use multiple files, giving each class its own set of files. — location: [796](kindle://book?action=open&asin=B001NLL7VG&location=796) ^ref-64037

---
NSObject in the @interface line tells the compiler that the Circle class is based on the NSObject class. — location: [805](kindle://book?action=open&asin=B001NLL7VG&location=805) ^ref-37918

---
instance variables — location: [815](kindle://book?action=open&asin=B001NLL7VG&location=815) ^ref-48949

---
method declarations. — location: [819](kindle://book?action=open&asin=B001NLL7VG&location=819) ^ref-47567

---
The leading dash signals that this is the declaration for an Objective-C method. That’s one way you can distinguish a method declaration from a function prototype, which has no leading dash. — location: [822](kindle://book?action=open&asin=B001NLL7VG&location=822) ^ref-26760

---
Objective-C uses a syntax technique called infix notation. The name of the method and its arguments are all intertwined. — location: [832](kindle://book?action=open&asin=B001NLL7VG&location=832) ^ref-25472

---
arguments with what they do. With C and C++ code, you’ll sometimes have four or five arguments to a function, and knowing exactly which argument does what without consulting the documentation can be difficult. — location: [840](kindle://book?action=open&asin=B001NLL7VG&location=840) ^ref-60371

---
The type of the argument is specified in parentheses, — location: [848](kindle://book?action=open&asin=B001NLL7VG&location=848) ^ref-45500

---
If a method takes an argument, it has a colon. If it takes no arguments, it has no colons. — location: [857](kindle://book?action=open&asin=B001NLL7VG&location=857) ^ref-22174

---
we advocate putting comments on all @end statements noting the class name. — location: [862](kindle://book?action=open&asin=B001NLL7VG&location=862) ^ref-33177

---
The @interface section, which we just discussed, defines a class’s public interface. — location: [868](kindle://book?action=open&asin=B001NLL7VG&location=868) ^ref-18588

---
The definitions of the individual methods are next. They don’t have to appear in the same order as they do in the @interface directive. You can even define methods in an@implementation that don’t have a corresponding declaration in the @interface. — location: [878](kindle://book?action=open&asin=B001NLL7VG&location=878) ^ref-33558

---
You can think of these as private methods, used just in the implementation of the class. — location: [879](kindle://book?action=open&asin=B001NLL7VG&location=879) ^ref-28761

---
You might think that defining a method solely in the @implementation directive makes it inaccessible from outside the implementation, but that’s not the case. Objective-C doesn’t really have private methods. There is no way to mark a method as being private and preventing other code from calling it. This is a side effect of Objective-C’s dynamic nature. — location: [881](kindle://book?action=open&asin=B001NLL7VG&location=881) ^ref-19625

---
It’s OK for the parameter names to differ between the @interface and the @implementation. In this case, if we had left the parameter name as fillColor, it would have hidden the fillColor instance variable and generated a warning from the compiler. — location: [888](kindle://book?action=open&asin=B001NLL7VG&location=888) ^ref-32456

---
Using the same variable name hides the original variable. We avoid this problem by using a new name for the parameter. — location: [893](kindle://book?action=open&asin=B001NLL7VG&location=893) ^ref-58386

---
When you call a method in Objective-C, a secret hidden parameter called self is passed to the receiving object that refers to the receiving object. — location: [901](kindle://book?action=open&asin=B001NLL7VG&location=901) ^ref-56995

---
Because the Objective-C runtime can pass different objects as the hidden self parameter, it can change which objects get their instance variables changed. — location: [905](kindle://book?action=open&asin=B001NLL7VG&location=905) ^ref-33750

---
When you instantiate an object, memory is allocated, and then that memory is initialized to some useful default values—that is, something other than the random values you get with freshly allocated memory. When the allocation and initialization steps are done, we say that a new object instance has been created. — location: [921](kindle://book?action=open&asin=B001NLL7VG&location=921) ^ref-55358

---
Because an object’s local variables are specific to that instance of the object, we call them instance variables, often shortened to “ — location: [925](kindle://book?action=open&asin=B001NLL7VG&location=925) ^ref-65389

---
One of the nifty features of Objective-C is that you can treat a class just like an object and send it messages. This is handy for behavior that isn’t tied to one particular object but is global to the class. The best example of this kind of message is allocating a new object. When you want a new circle, it’s appropriate to ask the Circle class for that new object, rather than asking an existing circle. — location: [928](kindle://book?action=open&asin=B001NLL7VG&location=928) ^ref-26923

---
object-oriented programming guru Bertrand Meyer’s Open/Closed Principle, which says that software entities should be open for extension but closed for modification. — location: [966](kindle://book?action=open&asin=B001NLL7VG&location=966) ^ref-10243

---
Software that adheres to the Open-Closed Principle tends to be more robust in the face of change, because you don’t have to edit code that’s already working correctly. — location: [968](kindle://book?action=open&asin=B001NLL7VG&location=968) ^ref-60343

---
Unified Modeling — location: [1011](kindle://book?action=open&asin=B001NLL7VG&location=1011) ^ref-8025

---
Language (UML), — location: [1011](kindle://book?action=open&asin=B001NLL7VG&location=1011) ^ref-24628

---
Directly changing the value of inherited instance variables is considered bad form. Be sure to use methods to change them. — location: [1034](kindle://book?action=open&asin=B001NLL7VG&location=1034) ^ref-47356

---
You can inherit from no class in Objective-C, but if you’re using Cocoa, you’ll want to inherit from NSObject, because it provides a lot of useful features — location: [1040](kindle://book?action=open&asin=B001NLL7VG&location=1040) ^ref-34084

---
Objective-C does not support multiple inheritance. — location: [1045](kindle://book?action=open&asin=B001NLL7VG&location=1045) ^ref-27451

---
You can get many of the benefits of multiple inheritance by using other features of Objective-C, such as categories (see Chapter 12) and protocols (see Chapter 13). — location: [1048](kindle://book?action=open&asin=B001NLL7VG&location=1048) ^ref-1697

---
You’ll notice we didn’t include the curly braces for the missing instance variables: if you don’t have any ivars, you can omit the braces. — location: [1054](kindle://book?action=open&asin=B001NLL7VG&location=1054) ^ref-60033

---
Although the draw method doesn’t do anything, we define it anyway so that all of Shape’s subclasses can implement their versions. It’s OK to have an empty body, or one that returns a dummy value, for a method definition. — location: [1061](kindle://book?action=open&asin=B001NLL7VG&location=1061) ^ref-40800

---
Moving and simplifying code this way is called refactoring, — location: [1072](kindle://book?action=open&asin=B001NLL7VG&location=1072) ^ref-18729

---
When you refactor, you move code around to improve the architecture, as we did here to eliminate duplicate code, — location: [1073](kindle://book?action=open&asin=B001NLL7VG&location=1073) ^ref-4393

---
without changing the code’s behavior or results. — location: [1074](kindle://book?action=open&asin=B001NLL7VG&location=1074) ^ref-4833

---
• You override an inherited method when you want to change its implementation. — location: [1086](kindle://book?action=open&asin=B001NLL7VG&location=1086) ^ref-22497

---
When you create a new class, its objects inherit the instance variables from its superclasses, and then (optionally) add their own instance variables. — location: [1122](kindle://book?action=open&asin=B001NLL7VG&location=1122) ^ref-12163

---
NSObject declares one instance variable, called isa, which holds the pointer to the object’s class. — location: [1128](kindle://book?action=open&asin=B001NLL7VG&location=1128) ^ref-17172

---
The NSObject instance variable is called isa because inheritance sets up an “is a” relationship between the subclass and the superclass; — location: [1133](kindle://book?action=open&asin=B001NLL7VG&location=1133) ^ref-23560

---
Remember that every method call gets a hidden parameter, called self, which is a pointer to the object that receives the message. Methods use the self parameter to find the instance variables they use. — location: [1137](kindle://book?action=open&asin=B001NLL7VG&location=1137) ^ref-64405

---
self points to the first instance variable of the first class in the chain of inheritance. — location: [1140](kindle://book?action=open&asin=B001NLL7VG&location=1140) ^ref-52779

---
The compiler works its magic by using a “base plus offset” mechanism. Given the base address of an object—that is, the memory location of the first byte of the first instance variable—the compiler can find all other instance variables by adding an offset to that address. — location: [1147](kindle://book?action=open&asin=B001NLL7VG&location=1147) ^ref-24582

---
Objective-C provides a way to override a method and still call the superclass’s implementation—useful when you want to let the superclass do its thing and perform some additional work before or after. — location: [1177](kindle://book?action=open&asin=B001NLL7VG&location=1177) ^ref-19485

---
To call the inherited method implementation, you use super as the target for a method call. — location: [1178](kindle://book?action=open&asin=B001NLL7VG&location=1178) ^ref-46968

---
Where does super come from? It’s not a parameter or an instance variable, but instead a bit of magic provided by the Objective-C compiler. When you send a message to super, you’re asking Objective-C to send the message to the class’s superclass. If it’s not defined there, Objective-C continues looking up the inheritance chain in the usual fashion. — location: [1193](kindle://book?action=open&asin=B001NLL7VG&location=1193) ^ref-7421

---
When you override a method, invoking the superclass method is almost always a good idea, in case it’s doing more work than you’re aware of. — location: [1204](kindle://book?action=open&asin=B001NLL7VG&location=1204) ^ref-17175

---
Through composition, a Unicycle consists of a Pedal and a Tire. — location: [1229](kindle://book?action=open&asin=B001NLL7VG&location=1229) ^ref-19485

---
Strictly speaking, only objects are said to be composed. More primitive types like int, float, enum, and struct are considered to just be part of the object. — location: [1232](kindle://book?action=open&asin=B001NLL7VG&location=1232) ^ref-28478

---
You can leave out the curly braces in your class definitions if you don’t have any instance variables. — location: [1244](kindle://book?action=open&asin=B001NLL7VG&location=1244) ^ref-41079

---
By supplying a description method in your class, you can customize how your objects are printed by NSLog(). — location: [1251](kindle://book?action=open&asin=B001NLL7VG&location=1251) ^ref-28831

---
The description method for Cocoa’s NSArray class, which manages a collection of objects, provides information about the array itself, such as the number of objects it contains and descriptions of each object it contains. — location: [1255](kindle://book?action=open&asin=B001NLL7VG&location=1255) ^ref-52825

---
When a new Car is allocated, these pointers are initialized to nil (a zero value) — location: [1267](kindle://book?action=open&asin=B001NLL7VG&location=1267) ^ref-42801

---
When you create a new object with new, two steps actually happen under the hood. First, the object is allocated, meaning that a chunk of memory is obtained that will hold your instance variables. The init method is then called automatically to get the object into a workable state. — location: [1271](kindle://book?action=open&asin=B001NLL7VG&location=1271) ^ref-21701

---
You need to call [super init] so that the superclass (NSObject, in this case) can do any one-time initialization that it needs to do. The init method returns a value (of type id, a generic object pointer) representing the object that was initialized. Assigning the result of [super init] back to self is a standard Objective-C convention. We do this in case the superclass, as part of its initialization work, returns a different object than the one originally created. — location: [1279](kindle://book?action=open&asin=B001NLL7VG&location=1279) ^ref-19253

---
An accessor method is one that reads or changes a specific attribute for an object. — location: [1301](kindle://book?action=open&asin=B001NLL7VG&location=1301) ^ref-7503

---
Setter methods are named after the attribute they change, preceded by the word “ — location: [1322](kindle://book?action=open&asin=B001NLL7VG&location=1322) ^ref-8972

---
Getter methods are simply named after the attribute they return. — location: [1324](kindle://book?action=open&asin=B001NLL7VG&location=1324) ^ref-43585

---
If you use “get” in your accessor method names, experienced Cocoa programmers using your code will expect to provide pointers as arguments to your method — location: [1334](kindle://book?action=open&asin=B001NLL7VG&location=1334) ^ref-35306

---
the compiler doesn’t do any error checking on the index used when accessing the array. — location: [1363](kindle://book?action=open&asin=B001NLL7VG&location=1363) ^ref-32349

---
will access random memory and lead to bugs and program crashes. — location: [1365](kindle://book?action=open&asin=B001NLL7VG&location=1365) ^ref-51514

---
When you can say, “X is a Y,” you can use inheritance. — location: [1402](kindle://book?action=open&asin=B001NLL7VG&location=1402) ^ref-6683

---
When you can say, “X has a Y,” you should use composition. — location: [1404](kindle://book?action=open&asin=B001NLL7VG&location=1404) ^ref-18436

---
If you use .mm for the file extension, you’re telling the compiler you’ve written your code in Objective-C++, which lets you use C++ and Objective-C together. — location: [1454](kindle://book?action=open&asin=B001NLL7VG&location=1454) ^ref-36178

---
The compiler needs the layout of instance variables in the class so it can generate the proper code, but it doesn’t automatically know there is a header file to go along with this source file. — location: [1498](kindle://book?action=open&asin=B001NLL7VG&location=1498) ^ref-40417

---
Because we’re inheriting from these classes rather than just using pointers to the classes, we can’t use the @class trick in their header files. — location: [1577](kindle://book?action=open&asin=B001NLL7VG&location=1577) ^ref-45428

---
Judicious use of the @class directive, in which you tell the compiler “trust that you’ll see a class by this name eventually,” can reduce compile time by cutting down on the number of header files you have to import. — location: [1605](kindle://book?action=open&asin=B001NLL7VG&location=1605) ^ref-39440

---
you can press the escape key to have Xcode open a menu with all possible completions, — location: [1696](kindle://book?action=open&asin=B001NLL7VG&location=1696) ^ref-47175

---
you can use control-period to cycle through the options or shift-control-period to cycle backward. — location: [1701](kindle://book?action=open&asin=B001NLL7VG&location=1701) ^ref-59855

---
You can move to the next placeholder by typing control-forward slash. — location: [1721](kindle://book?action=open&asin=B001NLL7VG&location=1721) ^ref-23527

---
Chose File ➤ Make Snapshot (or its handy shortcut, command-control-S) and Xcode will remember the state of your project. — location: [1735](kindle://book?action=open&asin=B001NLL7VG&location=1735) ^ref-51892

---
“Snapshot Failed: A project snapshot cannot be created” error. If you get this error, try deleting the sparse image and rebooting. — location: [1741](kindle://book?action=open&asin=B001NLL7VG&location=1741) ^ref-20770

---
Find in Project lets you do search and replace across the files in your project. — location: [1744](kindle://book?action=open&asin=B001NLL7VG&location=1744) ^ref-3683

---
Edit ➤ Edit all in Scope — location: [1755](kindle://book?action=open&asin=B001NLL7VG&location=1755) ^ref-59972

---
Edit ➤ Refactor — location: [1773](kindle://book?action=open&asin=B001NLL7VG&location=1773) ^ref-5479

---
Sadly, refactoring does not rename things in comments, so end-of-class comments, file header comments generated by Xcode, or any documentation comments you may have written will need to be fixed manually. — location: [1783](kindle://book?action=open&asin=B001NLL7VG&location=1783) ^ref-27511

---
control-P: Move to the previous line — location: [1800](kindle://book?action=open&asin=B001NLL7VG&location=1800) ^ref-59269

---
control-N: Move to the next line — location: [1801](kindle://book?action=open&asin=B001NLL7VG&location=1801) ^ref-46019

---
control-L: Center the insertion point in the window. — location: [1808](kindle://book?action=open&asin=B001NLL7VG&location=1808) ^ref-22892

---
Just select the file name (you can even leave off the .h), and choose File ➤ Open Quickly — location: [1823](kindle://book?action=open&asin=B001NLL7VG&location=1823) ^ref-24334

---
If you don’t have any text selected, choosing Open Quickly opens a dialog box, which is another way of finding a file to look at, with the shortcut ⌘D — location: [1825](kindle://book?action=open&asin=B001NLL7VG&location=1825) ^ref-31894

---
Check out the View ➤ Code Folding menu for a lot of additional options. — location: [1853](kindle://book?action=open&asin=B001NLL7VG&location=1853) ^ref-27267

---
Option-click the function menu sort it alphabetically. — location: [1870](kindle://book?action=open&asin=B001NLL7VG&location=1870) ^ref-35214

---
You’ll also notice a couple of extra things in there, — location: [1870](kindle://book?action=open&asin=B001NLL7VG&location=1870) ^ref-55584

---
Xcode also looks in comments that begin with words like MARK: (behaves the same as #pragma mark), TODO:, FIXME:, !!!:, and ???:, and puts that text into the function menu, — location: [1874](kindle://book?action=open&asin=B001NLL7VG&location=1874) ^ref-15865

---
this menu is very handy for navigating around your code’s inheritance tree. — location: [1892](kindle://book?action=open&asin=B001NLL7VG&location=1892) ^ref-39640

---
If you want to go directly to Apple’s official documentation for an API, a very fast way to do that is to option-double-click a symbol; — location: [1928](kindle://book?action=open&asin=B001NLL7VG&location=1928) ^ref-19129

---
programming with multiple streams of execution happening at the same time, and it is very difficult to do correctly. Threaded programming often creates bugs that are incredibly difficult to chase down. — location: [1998](kindle://book?action=open&asin=B001NLL7VG&location=1998) ^ref-35107

---
The first structure is NSRange: — location: [2075](kindle://book?action=open&asin=B001NLL7VG&location=2075) ^ref-25065

---
This structure is used to represent a range of things, — location: [2076](kindle://book?action=open&asin=B001NLL7VG&location=2076) ^ref-25889

---
NSPoint represents an (x, y) point in the Cartesian plane: — location: [2088](kindle://book?action=open&asin=B001NLL7VG&location=2088) ^ref-59918

---
Cocoa provides a rectangle type, which is a composition of a point and a size: — location: [2090](kindle://book?action=open&asin=B001NLL7VG&location=2090) ^ref-48702

---
Why are these things C structs instead of full-blown objects? It comes down to performance. A program, especially a GUI program, uses a lot of temporary points, sizes, and rectangles to do its work. Remember that all Objective-C objects are dynamically allocated, and dynamic allocation is a relatively expensive operation, consuming a nontrivial amount of time. Making these structures first-class objects would impose a lot of overhead in their use. — location: [2094](kindle://book?action=open&asin=B001NLL7VG&location=2094) ^ref-4329

---
NSString’s stringWithFormat: method creates a new NSString just like that, with a format and arguments: — location: [2108](kindle://book?action=open&asin=B001NLL7VG&location=2108) ^ref-64160

---
The first is the ellipses (...) at the end, which tells you (and the compiler) that this method will take any number of additional arguments, specified in a comma-separated list, — location: [2112](kindle://book?action=open&asin=B001NLL7VG&location=2112) ^ref-34453

---
When you declare a method with the plus sign, you’ve marked the method as a class method — location: [2119](kindle://book?action=open&asin=B001NLL7VG&location=2119) ^ref-54197

---
This method belongs to the class object (as opposed to an instance object of the class) and is typically used to create new instances. Class methods used to create new objects are called factory methods — location: [2119](kindle://book?action=open&asin=B001NLL7VG&location=2119) ^ref-13352

---
The vast majority of methods you create will be instance methods and will be declared with a leading minus sign (-). These methods will operate on a specific object instance, — location: [2126](kindle://book?action=open&asin=B001NLL7VG&location=2126) ^ref-27968

---
NSString’s length method does the right thing when dealing with international strings, — location: [2135](kindle://book?action=open&asin=B001NLL7VG&location=2135) ^ref-895

---
When comparing strings for equality, you want to use isEqualToString: rather than just comparing their pointer values, — location: [2151](kindle://book?action=open&asin=B001NLL7VG&location=2151) ^ref-2057

---
If you want to see if a string is somewhere inside another string, use rangeOfString: — location: [2182](kindle://book?action=open&asin=B001NLL7VG&location=2182) ^ref-64903

---
NSArray has two limitations. First, it will hold only Objective-C objects. You can’t have primitive C types, like int, float, enum, struct, or random pointers in an NSArray. Also, you can’t store nil (the zero or NULL value for objects) in an NSArray. There are ways of working around these limitations, as you’ll see in a little while. — location: [2241](kindle://book?action=open&asin=B001NLL7VG&location=2241) ^ref-42185

---
- [NSException raise]. — location: [2278](kindle://book?action=open&asin=B001NLL7VG&location=2278) ^ref-59423

---
a global breakpoint for objc_exception_throw. — location: [2282](kindle://book?action=open&asin=B001NLL7VG&location=2282) ^ref-40550

---
There’s one gotcha if you’re enumerating over a mutable array: you can’t change the — location: [2334](kindle://book?action=open&asin=B001NLL7VG&location=2334) ^ref-17059

---
container, such as by adding or removing objects. If you do, the enumerator will become — location: [2335](kindle://book?action=open&asin=B001NLL7VG&location=2335) ^ref-14280

---
confused and you’ll get undefined results. — location: [2336](kindle://book?action=open&asin=B001NLL7VG&location=2336) ^ref-31389

---
many classes are actually implemented as class clusters, which are a bunch of implementation-specific classes hidden behind a common interface. — location: [2387](kindle://book?action=open&asin=B001NLL7VG&location=2387) ^ref-22117

---
Cocoa provides a class called NSNumber that wraps (that is, implements as objects) the primitive numeric types. — location: [2398](kindle://book?action=open&asin=B001NLL7VG&location=2398) ^ref-24372

---
The wrapping of a primitive type in an object is often called boxing, and taking the primitive type out is unboxing. Some languages have an autoboxing feature that will automatically converts a primitive to its — location: [2407](kindle://book?action=open&asin=B001NLL7VG&location=2407) ^ref-43099

---
corresponding wrapped type and back. Objective-C does not support autoboxing. — location: [2409](kindle://book?action=open&asin=B001NLL7VG&location=2409) ^ref-37683

---
This is a common idiom in Cocoa. There are a number of classes that have a singleton architecture: only one of them is needed. — location: [2454](kindle://book?action=open&asin=B001NLL7VG&location=2454) ^ref-3680

---
If you know that your programs will only be run on Leopard or later, you can take advantage of Objective-C 2.0’s garbage collection, — location: [2531](kindle://book?action=open&asin=B001NLL7VG&location=2531) ^ref-26724

---
If you want to run on older versions of Mac OS X or you’re doing iPhone development, you will want to read the whole chapter. — location: [2533](kindle://book?action=open&asin=B001NLL7VG&location=2533) ^ref-38479

---
In your accessors, if you retain the new object before you release the old object, you’ll be safe. — location: [2600](kindle://book?action=open&asin=B001NLL7VG&location=2600) ^ref-12838

---
“I’m autoreleasing all the objects I use, but my program’s memory is growing to absolutely huge levels. — location: [2729](kindle://book?action=open&asin=B001NLL7VG&location=2729) ^ref-11077

---
Autorelease pool allocation and destruction are pretty cheap operations, so you could even make a new pool in every iteration of the loop. — location: [2739](kindle://book?action=open&asin=B001NLL7VG&location=2739) ^ref-22907

---
Autorelease pools are kept as a stack: if you make a new autorelease pool, it gets added to the top of the stack. An autorelease message puts the receiver into the topmost pool. If you put an object into a pool, and then make a new pool and destroy it, the autoreleased object will still be around, because the pool holding that object is still in existence. — location: [2741](kindle://book?action=open&asin=B001NLL7VG&location=2741) ^ref-17828

---
Turning on garbage collection is very easy, but it’s an opt-in feature. Just go to the Build tab of the project information window, and choose Required [-fobjc-gc-onl — location: [2747](kindle://book?action=open&asin=B001NLL7VG&location=2747) ^ref-45369

---
When you enable garbage collection, the usual memory management calls all turn into no-op instructions; that’s a fancy way of saying they don’t do anything. — location: [2753](kindle://book?action=open&asin=B001NLL7VG&location=2753) ^ref-6184

---
The worst thing you can do is keep a pointer to an object that you’re done with. So if you point to an object in an instance variable (recall composition), be sure to assign nil to your instance variable, which removes your reference to this object and lets the garbage collector know it can be purged. — location: [2758](kindle://book?action=open&asin=B001NLL7VG&location=2758) ^ref-34401

---
Note that you can’t use garbage collection if you’re writing iPhone software. In fact, in iPhone programming, Apple recommends you avoid using autorelease in your own code and that you also avoid convenience functions that give you autoreleased objects. — location: [2767](kindle://book?action=open&asin=B001NLL7VG&location=2767) ^ref-28140

---
Cocoa has three rules about objects and their retain counts: • If you get the object from a new, alloc, or copy operation, the object has a retain count of 1. • If you get the object any other way, assume it has a retain count of 1 and that it has been autoreleased. • If you retain an object, you must balance every retain with a release. — location: [2780](kindle://book?action=open&asin=B001NLL7VG&location=2780) ^ref-41789

---
if you use the accessors, even in the implementation of a class, you’ll insulate that code from any changes. — location: [2978](kindle://book?action=open&asin=B001NLL7VG&location=2978) ^ref-37405

---
The dealloc method goes away completely: there is no use for dealloc in the GC world. — location: [2987](kindle://book?action=open&asin=B001NLL7VG&location=2987) ^ref-60637

---
If you need to do some work when an object goes away, you can override -finalize, which is called when the object is finally collected, — location: [2988](kindle://book?action=open&asin=B001NLL7VG&location=2988) ^ref-37543

---
The init method that takes the most arguments usually ends up being the designated initializer. — location: [3026](kindle://book?action=open&asin=B001NLL7VG&location=3026) ^ref-57546

---
To fulfill the promise of the designated initializer, all other initializers should be implemented in terms of initWithPressure:treadDepth:. — location: [3031](kindle://book?action=open&asin=B001NLL7VG&location=3031) ^ref-52295

---
If you do write an initializer, be sure you call the superclass’s designed initializer in your own designated initializer. — location: [3045](kindle://book?action=open&asin=B001NLL7VG&location=3045) ^ref-35446

---
You want to make copies of string arguments. A common error is to get a string from the user interface, like a text field, and use that as something’s name. The strings you get from text fields are typically mutable strings and will change when the user types something new. — location: [3130](kindle://book?action=open&asin=B001NLL7VG&location=3130) ^ref-12565

---
By adding copy to name, the compiler and users of the class know that name is going to be copied. This can simplify the life of programmers using this class, because programmers know they won’t need to make a copy of strings they get out of text fields. engine, on the other hand, is managed just by retain/release. If you don’t supply either one, the compiler will default to assign, which is generally not what you want with objects. — location: [3152](kindle://book?action=open&asin=B001NLL7VG&location=3152) ^ref-52331

---
You can use some other decorations, like nonatomic, which makes accessors a bit faster if they won’t be used in a multithreaded environment. Desktop machines are so fast that there is no real performance gain by making a property nonatomic, but iPhone developers frequently use it to eke out more performance on that resource-constrained device. You can also use assign if you don’t want the attribute object to be retained, to help avoid retain cycles. — location: [3156](kindle://book?action=open&asin=B001NLL7VG&location=3156) ^ref-44442

---
will use the appellation instance variable inside of their implementations. — location: [3172](kindle://book?action=open&asin=B001NLL7VG&location=3172) ^ref-4266

---
This line says to call setName: with an argument of nil. — location: [3180](kindle://book?action=open&asin=B001NLL7VG&location=3180) ^ref-60494

---
By default, properties are mutable: you can read and write them. Properties have a readwrite attribute you can use. Since it’s the default, you won’t usually use it, but it’s there if you need it and you want to make your intentions clear. — location: [3190](kindle://book?action=open&asin=B001NLL7VG&location=3190) ^ref-2606

---
When the compiler sees that @property is readonly, it generates a getter but not a setter for that attribute. — location: [3197](kindle://book?action=open&asin=B001NLL7VG&location=3197) ^ref-56407

---
Dot notation, although usually presented in the context of properties, is just shorthand for calling the setter and getter for objects. — location: [3212](kindle://book?action=open&asin=B001NLL7VG&location=3212) ^ref-54708

---
Categories have two limitations. The first is that you can’t add new instance variables to a class. — location: [3276](kindle://book?action=open&asin=B001NLL7VG&location=3276) ^ref-60194

---
The second limitation concerns name collisions, in which one of your category methods has the same name as an existing method. When names collide, the category wins. Your category method will completely replace the original method, with no way of getting the original back. Some — location: [3277](kindle://book?action=open&asin=B001NLL7VG&location=3277) ^ref-40896

---
programmers add a prefix to their category — location: [3279](kindle://book?action=open&asin=B001NLL7VG&location=3279) ^ref-23027

---
In Cocoa, categories are used mainly for three purposes: splitting a class’s implementation across multiple files or multiple frameworks, creating forward references for private methods, and adding informal protocols to an object. — location: [3285](kindle://book?action=open&asin=B001NLL7VG&location=3285) ^ref-61012

---
This lets you separate your methods into categories as an organizational and documentation convenience, while still allowing you to keep all your methods in one big pile in the implementation file. — location: [3368](kindle://book?action=open&asin=B001NLL7VG&location=3368) ^ref-27897

---
delegate, which is an object asked by another object to do some of its work. — location: [3376](kindle://book?action=open&asin=B001NLL7VG&location=3376) ^ref-43842

---
A run loop is a Cocoa construct that blocks (that is, doesn’t do any processing) until something interesting happens. — location: [3406](kindle://book?action=open&asin=B001NLL7VG&location=3406) ^ref-36575

---
Putting a category on NSObject is called creating an informal protocol — location: [3452](kindle://book?action=open&asin=B001NLL7VG&location=3452) ^ref-63872

---
a selector? It’s just the name of a method, but it’s encoded in a special way that’s used by the Objective-C runtime for quick lookups. You indicate a selector by using the@selector() compiler directive, with the name of the method nestled in the parentheses. — location: [3463](kindle://book?action=open&asin=B001NLL7VG&location=3463) ^ref-43052

---
You adopt a protocol by listing the protocol’s name in your class’s@interface declaration. — location: [3502](kindle://book?action=open&asin=B001NLL7VG&location=3502) ^ref-52819

---
When you do this, your class is said to conform to the protocol — location: [3503](kindle://book?action=open&asin=B001NLL7VG&location=3503) ^ref-58668

---
To adopt a protocol, you list the protocol in the class declaration, surrounded by angle brackets. — location: [3525](kindle://book?action=open&asin=B001NLL7VG&location=3525) ^ref-52820

---
When you create a shallow copy, you don’t duplicate the referred objects; your new copy simply points at the referred objects that already exist. NSArray’s copy method makes shallow copies. — location: [3544](kindle://book?action=open&asin=B001NLL7VG&location=3544) ^ref-26333

---
A deep copy, on the other hand, makes duplicates of all the referred objects. — location: [3548](kindle://book?action=open&asin=B001NLL7VG&location=3548) ^ref-18077

---
A zone is an NSZone, which is a region of memory from which you can allocate memory. When you send a copy message to an object, it gets turned into copyWithZone: before reaching your code. — location: [3557](kindle://book?action=open&asin=B001NLL7VG&location=3557) ^ref-45661

---
There are two new quasi-keywords in there: IBOutlet and IBAction. These are actually just #defines provided by the AppKit. IBOutlet is defined to be nothing, so it disappears when we compile. IBAction is defined to be void, which means the return type of the methods declared in AppController will be void (that is, returning nothing). — location: [3717](kindle://book?action=open&asin=B001NLL7VG&location=3717) ^ref-25190

---
If IBOutlet and IBAction don’t do anything, why are they even there? The answer is that they’re not there for the compiler: IBOutlet and IBAction are actually flags to Interface Builder, as well as the humans who read the code. By looking for IBOutlet and IBAction, Interface Builder learns that AppController objects have two instance variables that can be connected to stuff, and AppController provides two methods that can be the target of button clicks (and other user interface actions). — location: [3720](kindle://book?action=open&asin=B001NLL7VG&location=3720) ^ref-45676

---
Even though the file extension is .xib, we call these nib files. “Nib” is an acronym for NeXT Interface Builder, — location: [3737](kindle://book?action=open&asin=B001NLL7VG&location=3737) ^ref-39086

---
Nib files are binary files that contain freeze-dried objects, and .xib files are nib files in XML format. They get compiled into nib format at compile time. — location: [3738](kindle://book?action=open&asin=B001NLL7VG&location=3738) ^ref-1653

---
A very, very common error is to try to do some work with IBOutlets in the init method. Because all the instance variables are nil, all messages to them are no-ops, so any work you try to do in init will silently fail (this is one of the places where Cocoa can let you down and cost you some debugging time). — location: [3835](kindle://book?action=open&asin=B001NLL7VG&location=3835) ^ref-49817

---
-writeToFile: atomically:, — location: [3914](kindle://book?action=open&asin=B001NLL7VG&location=3914) ^ref-52947

---
Some property list files, especially the preferences files, are stored in a compressed binary format. You can convert these files to something human-readable using the plutil command: plutil -convert xml1 filename.plist. — location: [3924](kindle://book?action=open&asin=B001NLL7VG&location=3924) ^ref-55813

---
+arrayWithContentsOfFile: — location: [3927](kindle://book?action=open&asin=B001NLL7VG&location=3927) ^ref-14381

---
One downside to these functions is that they don’t return any error information. If you can’t load a file, you’ll just get a nil pointer back from the method, without any idea of what went wrong. — location: [3941](kindle://book?action=open&asin=B001NLL7VG&location=3941) ^ref-31542

---
NSLog isn’t smart enough to detect object cycles, — location: [4022](kindle://book?action=open&asin=B001NLL7VG&location=4022) ^ref-26366

---
-valueForKey uses the metadata in the Objective-C runtime to crack open objects and poke inside them looking for interesting information. You can’t really do this kind of stuff in C or C++. By using KVC, you can get values where there are no getter methods and without having to access an instance variable directly via an object pointer. — location: [4066](kindle://book?action=open&asin=B001NLL7VG&location=4066) ^ref-7247

---
For KVC, Cocoa automatically boxes and unboxes scalar values. — location: [4072](kindle://book?action=open&asin=B001NLL7VG&location=4072) ^ref-27863

---
Both the compiler and Apple reserve instance variable names that begin with an underscore, promising dire consequences to you and your dog if you try to use one. There’s no actual enforcement of this rule, but there might be someday, so disobey at your own risk. — location: [4080](kindle://book?action=open&asin=B001NLL7VG&location=4080) ^ref-58374

---
One cool thing about KVC is that if you ask an NSArray for a value for a key, it will actually ask every object in the array for the value for that key and then pack things up in another array, — location: [4105](kindle://book?action=open&asin=B001NLL7VG&location=4105) ^ref-14670

---
NSArrays that are embedded in other objects are known in the KVC vernacular as having to-many relationship. — location: [4108](kindle://book?action=open&asin=B001NLL7VG&location=4108) ^ref-13786

---
Ordinary object composition is a to-one relationship. — location: [4113](kindle://book?action=open&asin=B001NLL7VG&location=4113) ^ref-10806

---
There is also no error checking by the compiler. You might ask for karz.@avg. millage: the compiler has no idea that’s a bad key path, and you’ll get a runtime error when you try to use it. — location: [4185](kindle://book?action=open&asin=B001NLL7VG&location=4185) ^ref-28128

---
@distinctUnionOfObjects.make”: — location: [4189](kindle://book?action=open&asin=B001NLL7VG&location=4189) ^ref-8348

---
Generally, unless there’s a rare, good reason not to (like a specific action you’re intentionally trying to avoid), always invoke the superclass method when you’re overriding. — location: [4225](kindle://book?action=open&asin=B001NLL7VG&location=4225) ^ref-63760

---
If you look closely at the error message, you notice it mentions the method valueForUndefinedKey:. As you can probably guess, we can handle undefined keys by overriding this method. — location: [4231](kindle://book?action=open&asin=B001NLL7VG&location=4231) ^ref-1302

---
You also can probably guess that there’s a corresponding setValue:forUndefinedKey:, if you try to change a value with an unknown key. — location: [4232](kindle://book?action=open&asin=B001NLL7VG&location=4232) ^ref-18231

---
Notice the difference between <null> and (null). <null> is an [NSNull null] object, and (null) is a real live nil value that we got back because “gronk” was not in the dictionary. — location: [4243](kindle://book?action=open&asin=B001NLL7VG&location=4243) ^ref-43700

---
Also notice we used the KVC method setValue:forKey: when using the stuff dictionary. Using this method allows callers to pass in a nil value without requiring us to check for it in the code. The NSDictionary setObject:forKey: will complain if you give it nil, while setValue:forKey: with a nil value on a dictionary will remove that key from the dictionary. — location: [4244](kindle://book?action=open&asin=B001NLL7VG&location=4244) ^ref-6359

---
“Predicate” here is used in the mathematical and computer science sense: a function that evaluates to a true or false value. — location: [4268](kindle://book?action=open&asin=B001NLL7VG&location=4268) ^ref-738

---
NSPredicate is Cocoa’s means of describing queries, like you might use with a database. — location: [4270](kindle://book?action=open&asin=B001NLL7VG&location=4270) ^ref-25527

---
measure your performance using Apple’s tools like Shark or Instruments if you run into speed problems. iPhone programmers, though, should pay very close attention to program performance at all times. — location: [4336](kindle://book?action=open&asin=B001NLL7VG&location=4336) ^ref-48334

---
NSPredicate strings also let you use %K to specify a key path. — location: [4349](kindle://book?action=open&asin=B001NLL7VG&location=4349) ^ref-41883

---
Using format specifiers is one way to have flexible predicates. The other involves putting variable names into the string, similar to environment variables: — location: [4351](kindle://book?action=open&asin=B001NLL7VG&location=4351) ^ref-26849

---
No type checking is done by the predicate machinery. You can accidentally plug in a string where a number was expected, which might end up as an error message complaint at runtime or just baffling behavior. — location: [4365](kindle://book?action=open&asin=B001NLL7VG&location=4365) ^ref-6028

---
To relax the rules for name matching here, we can decorate these operators with [c], [d], or [cd]. The c stands for “case insensitive,” the d for “diacritic insensitive” (that is, without accents), and [cd] for both. — location: [4430](kindle://book?action=open&asin=B001NLL7VG&location=4430) ^ref-3994

---
C++ has a lot of features that Objective-C lacks: multiple inheritance, namespaces, operator overloading, templates, class variables, abstract classes, STL (Standard Template Library), — location: [4494](kindle://book?action=open&asin=B001NLL7VG&location=4494) ^ref-24726

---
you can use categories and protocols as a form of multiple inheritance or for implementing abstract base classes. — location: [4497](kindle://book?action=open&asin=B001NLL7VG&location=4497) ^ref-48980

---
you can use composition to include an object in another object and then use stub methods to redirect messages to the second object (which is a common technique in Java). — location: [4501](kindle://book?action=open&asin=B001NLL7VG&location=4501) ^ref-62677

---
You can also simulate multiple inheritance by overriding the forwardInvocation: method. This method gets called if a message is received that the object doesn’t know how to handle. — location: [4502](kindle://book?action=open&asin=B001NLL7VG&location=4502) ^ref-36013

---
The GCC compiler that comes with Xcode supports a hybrid language called Objective-C++. — location: [4567](kindle://book?action=open&asin=B001NLL7VG&location=4567) ^ref-13802

---

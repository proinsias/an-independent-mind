---
kindle-sync:
  bookId: '58010'
  title: Building Machine Learning Systems with Python
  author: Willi Richert and Luis Pedro Coelho
  asin: B00E7NC9D2
  lastAnnotatedDate: '2015-06-26'
  bookImageUrl: 'https://m.media-amazon.com/images/I/51kMAMAiMPL._SY160.jpg'
  highlightsCount: 45
---
# Building Machine Learning Systems with Python
## Metadata
* Author: [Willi Richert and Luis Pedro Coelho](https://www.amazon.comundefined)
* ASIN: B00E7NC9D2
* Reference: https://www.amazon.com/dp/B00E7NC9D2
* [Kindle link](kindle://book?action=open&asin=B00E7NC9D2)

## Highlights
Keep that in mind whenever you need a true copy. — location: [482](kindle://book?action=open&asin=B00E7NC9D2&location=482) ^ref-39533

---
operations are propagated to the individual elements. — location: [487](kindle://book?action=open&asin=B00E7NC9D2&location=487) ^ref-27471

---
In addition to normal list indexing, it allows us to use arrays themselves as indices. — location: [495](kindle://book?action=open&asin=B00E7NC9D2&location=495) ^ref-49126

---
>>> a>4 array([False, False,  True, False, False,  True], dtype=bool) >>> a[a>4] array([77,  5]) This can also be used to trim outliers. >>> a[a>4] = 4 >>> a array([0, 1, 4, 3, 4, 4]) — location: [498](kindle://book?action=open&asin=B00E7NC9D2&location=498) ^ref-22833

---
clipping the values at both ends of an interval with one function call — location: [502](kindle://book?action=open&asin=B00E7NC9D2&location=502) ^ref-11509

---
c[~np.isnan(c)] — location: [509](kindle://book?action=open&asin=B00E7NC9D2&location=509) ^ref-20087

---
import timeit — location: [514](kindle://book?action=open&asin=B00E7NC9D2&location=514) ^ref-11340

---
in every algorithm we are about to implement, we should always look at how we can move loops over individual elements from Python to some of the highly optimized NumPy or SciPy extension functions. — location: [525](kindle://book?action=open&asin=B00E7NC9D2&location=525) ^ref-37062

---
Using NumPy arrays, we no longer have the incredible flexibility of Python lists, which can hold basically anything. NumPy arrays always have only one datatype. — location: [527](kindle://book?action=open&asin=B00E7NC9D2&location=527) ^ref-64195

---
it is a good habit to always inspect the scipy module before you start implementing a numerical algorithm. — location: [536](kindle://book?action=open&asin=B00E7NC9D2&location=536) ^ref-9608

---
the complete namespace of NumPy is also accessible via SciPy. — location: [537](kindle://book?action=open&asin=B00E7NC9D2&location=537) ^ref-51386

---
comparing the function references of any base function; — location: [538](kindle://book?action=open&asin=B00E7NC9D2&location=538) ^ref-52694

---
scipy.dot is numpy.dot — location: [540](kindle://book?action=open&asin=B00E7NC9D2&location=540) ^ref-65391

---
sp.genfromtxt("web_traffic.tsv", delimiter="\t") — location: [591](kindle://book?action=open&asin=B00E7NC9D2&location=591) ^ref-33128

---
This splitting is done using the special index notation of SciPy, using which we can choose the columns individually. x = data[:,0] y = data[:,1] — location: [602](kindle://book?action=open&asin=B00E7NC9D2&location=602) ^ref-30914

---
import matplotlib.pyplot as plt plt.scatter(x,y) plt.title("Web traffic over the last month") plt.xlabel("Time") plt.ylabel("Hits/hour") plt.xticks([w*7*24 for w in range(10)], — location: [616](kindle://book?action=open&asin=B00E7NC9D2&location=616) ^ref-53884

---
['week %i'%w for w in range(10)]) plt.autoscale(tight=True) plt.grid() plt.show() — location: [618](kindle://book?action=open&asin=B00E7NC9D2&location=618) ^ref-56614

---
This error will be calculated as the squared distance of the model's prediction to the real data. That is, for a learned model function, f, the error is calculated as follows: def error(f, x, y):     return sp.sum((f(x)-y)**2) — location: [628](kindle://book?action=open&asin=B00E7NC9D2&location=628) ^ref-62933

---
SciPy's polyfit() function does exactly that. Given data x and y and the desired order of the polynomial (straight line has order 1), it finds the model function that minimizes the error function defined earlier. fp1, residuals, rank, sv, rcond = sp.polyfit(x, y, 1, full=True) The polyfit() function returns the parameters of the fitted model function, fp1; and by setting full to True, we also get additional background information on the fitting process. Of it, only residuals are of interest, which is exactly the error of the approximation. — location: [636](kindle://book?action=open&asin=B00E7NC9D2&location=636) ^ref-37145

---
We then use poly1d() to create a model function from the model parameters. — location: [645](kindle://book?action=open&asin=B00E7NC9D2&location=645) ^ref-435

---
fx = sp.linspace(0,x[-1], 1000) # generate X-values for plotting plt.plot(fx, f1(fx), linewidth=4) plt.legend(["d=%i" % f1.order], loc="upper left") — location: [653](kindle://book?action=open&asin=B00E7NC9D2&location=653) ^ref-45346

---
it is now capturing not only — location: [679](kindle://book?action=open&asin=B00E7NC9D2&location=679) ^ref-2455

---
the underlying process but also the noise. This is called overfitting. — location: [679](kindle://book?action=open&asin=B00E7NC9D2&location=679) ^ref-63034

---
inflection = 3.5*7*24 # calculate the inflection point in hours xa = x[:inflection] # data before the inflection point — location: [690](kindle://book?action=open&asin=B00E7NC9D2&location=690) ^ref-26168

---
ya = y[:inflection] xb = x[inflection:] # data after yb = y[inflection:] — location: [691](kindle://book?action=open&asin=B00E7NC9D2&location=691) ^ref-19535

---
SciPy's optimize module has the fsolve function to achieve this when providing an initial starting position. — location: [728](kindle://book?action=open&asin=B00E7NC9D2&location=728) ^ref-36847

---
The error on the training data is called a training error and is always an overly optimistic estimate of how well your algorithm is doing. — location: [835](kindle://book?action=open&asin=B00E7NC9D2&location=835) ^ref-35603

---
When using a complex model, it is — location: [839](kindle://book?action=open&asin=B00E7NC9D2&location=839) ^ref-54002

---
possible to get 100 percent accuracy in training and do no better than random guessing on testing! — location: [840](kindle://book?action=open&asin=B00E7NC9D2&location=840) ^ref-29085

---
Ideally, we would like to use all of the data for training and all of the data for testing as well. — location: [843](kindle://book?action=open&asin=B00E7NC9D2&location=843) ^ref-21554

---
We can achieve something quite similar by cross-validation. One extreme (but sometimes useful) form of cross-validation is leave-one-out. We will take an example out of the training data, learn a model without this example, and then see if the model classifies this example correctly: — location: [844](kindle://book?action=open&asin=B00E7NC9D2&location=844) ^ref-50812

---
The major problem with leave-one-out cross-validation is that we are now being forced to perform 100 times more work. — location: [853](kindle://book?action=open&asin=B00E7NC9D2&location=853) ^ref-43926

---
We can get most of the benefits of leave-one-out at a fraction of the cost by using x-fold cross-validation; here, "x" stands for a small number, say, five. In order to perform five-fold cross-validation, we break up the data in five groups, that is, five folds. — location: [855](kindle://book?action=open&asin=B00E7NC9D2&location=855) ^ref-30495

---
When generating the folds, you need to be careful to keep them balanced. For example, if all of the examples in one fold come from the same class, the results will not be representative. We will not go into the details of how to do this because the machine learning packages will handle it for you. — location: [864](kindle://book?action=open&asin=B00E7NC9D2&location=864) ^ref-37267

---
The simplest solution is now to use a single overall model on all your training data. — location: [867](kindle://book?action=open&asin=B00E7NC9D2&location=867) ^ref-56960

---
What makes up a classification model? We can break it up into three parts: The structure of the model: In this, we use a threshold on a single feature. The search procedure: In this, we try every possible combination of feature and threshold. The loss function: Using the loss function, we decide which of the possibilities is less bad (because we can rarely talk about the perfect solution). We can use the training error or just define this point the other way around and say that we want the best accuracy. Traditionally, people want the loss function to be minimum. — location: [877](kindle://book?action=open&asin=B00E7NC9D2&location=877) ^ref-14501

Otherwise known as the cost function

---
we can attempt to build a threshold that achieves minimal training error, but we will only test three values for each feature: the mean value of the features, the mean plus one standard deviation, and the mean minus one standard deviation. This could make sense if testing each value was very costly in terms of computer time (or if we had millions and millions of datapoints). Then the exhaustive search we used would be infeasible, and we would have to perform an approximation like this. — location: [883](kindle://book?action=open&asin=B00E7NC9D2&location=883) ^ref-39296

---
It might be that one type of error is much more costly than another. In a medical setting, false negatives and false positives are not equivalent. — location: [887](kindle://book?action=open&asin=B00E7NC9D2&location=887) ^ref-34693

---
It is often very useful to derive new combined features. This is a general area normally termed feature engineering; it is sometimes seen as less glamorous than algorithms, but it may matter more for performance (a simple algorithm on well-chosen features will perform better than a fancy algorithm on not-so-good features). — location: [922](kindle://book?action=open&asin=B00E7NC9D2&location=922) ^ref-37890

---
The goals of a good feature are to simultaneously vary with what matters and be invariant with what does not. — location: [928](kindle://book?action=open&asin=B00E7NC9D2&location=928) ^ref-39013

---
A natural question is whether or not we can select good features automatically. This problem is known as feature selection. There are many methods that have been proposed for this problem, but in practice, very simple ideas work best. It does not make sense to use feature selection in these small problems, but if you had thousands of features, throwing out most of them might make the rest of the — location: [935](kindle://book?action=open&asin=B00E7NC9D2&location=935) ^ref-63345

---
process much faster. — location: [938](kindle://book?action=open&asin=B00E7NC9D2&location=938) ^ref-59814

---
We need to normalize all of the features to a common scale. There are many solutions to this problem; a simple one is to normalize to Z-scores. The Z-score of a value is how far away from the mean it is in terms of units of standard deviation. — location: [964](kindle://book?action=open&asin=B00E7NC9D2&location=964) ^ref-30128

---
We can generalize it to a k-nearest neighbor classifier by considering not just the closest point but the k closest points. All k neighbors vote to select the label. k is typically a small number, such as 5, but can be larger, particularly if the dataset is very large. — location: [975](kindle://book?action=open&asin=B00E7NC9D2&location=975) ^ref-34921

---
we can reduce the multiclass problem to a series of binary decisions. — location: [983](kindle://book?action=open&asin=B00E7NC9D2&location=983) ^ref-14218

---
### [Books MOC](Books%20MOC.md)
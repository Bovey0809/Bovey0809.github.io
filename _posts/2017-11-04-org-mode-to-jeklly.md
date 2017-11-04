---
layout: default
titile: Using org-mode with markdown and jekyll
---

# Add modification in init.el

1.  Follow the instruction on the [website](http://orgmode.org/worg/org-tutorials/org-publish-html-tutorial.html).
2.  HINTS:
    1.  We only need the "org-static" to export images and latex.
    2.  The "org-md-publish-md" is build-in function.
3.  Add the following scripts in your init.pl file.
    
        (setq org-publish-project-alist
        '(
        ("org-static"
        :base-directory "~/org/"
        :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
        :publishing-directory "~/public_html/"
        :recursive t
        :publishing-function org-publish-attachment
        )
        ))

# Add export OPTIONS surround your head format

    #+OPTIONS: toc:nil num:nil
    #+BEGIN_HTML
    ---
    layout: default
    title: your title
    ---
    #+END_HTML

# Work flow

1.  Use "org-publish-project" the markdown export function to export org file into markdown style.
2.  Use "org-static" export to export the images in your org file.
3.  Find the destination of your export images and add it to the markdown file.

# Example

-   latex equations
    \[\text{org-static generate image file}\]
    ![latex-image]({{site.baseurl}}/images/ltxpng/latex-file.png)

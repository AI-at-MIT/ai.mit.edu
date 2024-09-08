# Website for AI@MIT.


## To deploy

NOTE: **The prod branch is in active deployment.**

0) make sure you have node and NextJs installed. See tutorial [here](https://nextjs.org/docs/getting-started/installation).
1) Clone the main branch
2) Run `npm run dev` to make sure everything is installed and runs correctly
3) Make your modifications
4) Run `npm run build` to make sure your code builds and is type safe
5) Push to main branch
6) Create a [pull request](https://github.com/AI-at-MIT/ai.mit.edu/pulls) to pull the `main` branch into the `prod` branch.

## To add a new initiative:
1) add a new `(initiative)-icon.svg` logo to `public/icons`, and `(initiative)-backdrop.svg` to `public/backdrops`
2) add a name and gradient in the `$initiatives` variable in `globals.scss` 
3) add the initiative information in `initiative_data` from `@components/util/constants.tsx`
4) create a page for the initiative in app/router, you can copy an existing one as a template
5) customize the page


## To update Exec:
1) Navigate to the `public/exec` folder
2) Rename the folder titled `"current_exec"` to `"20(start year)-20(start year + 1)_exec"`
3) create a new folder titled `"current_exec"` and enter this folder
4) add square high resolution colored photos for each person on exec
5) create a json called `exec_info.json` and fill it with the exec information for the upcoming year. The format is shown below. Note: you can remove/modify the element for me once I'm no longer involved, it's there for clarity:
```
[
  {
    "name": "David Koplow",
    "position": "Co-President",
    "imageSource": "david_headshot.jpg",
    "link": "https://www.linkedin.com/in/david-koplow/",
    "type": ["aim", "p"] //list keys for all initiatives they help run
  },
  {
    "name": "",  // Add a name if available
    "position": "",  // Add a position if available
    "imageSource": "",  // Add an image source if available
    "link": "",  // Add a link if available
    "type": []  // Add types if available
  }, 
  ...
]
```


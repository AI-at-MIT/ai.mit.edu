# Website for AI@MIT.


## To deploy site changes

NOTE: **The prod branch is in active deployment.**

0) make sure you have node and NextJs installed. See tutorial [here](https://nextjs.org/docs/getting-started/installation).
1) Clone the main branch
2) Run `npm run dev` to make sure everything is installed and runs correctly
3) Make your modifications
4) Run `npm run build` to make sure your code builds and is type safe
5) Push to main branch
6) Create a [pull request](https://github.com/AI-at-MIT/ai.mit.edu/pulls) to pull the `main` branch into the `prod` branch. 
![image info](./readme_assets/PR1.png)
7) Then follow the steps to complete it shown below. Note, if it doesn't build this won't work and you'll have to fix the errors.
![image info](./readme_assets/PR2.png)
![image info](./readme_assets/PR3.png)
![image info](./readme_assets/PR4.png)
![image info](./readme_assets/PR5.png)
8) After a couple minutes the site should be deployed at [ai-at-mit.com](https://www.ai-at-mit.com/). If there are errors in the pull request or the site isn't updated, there might be an issue with Vercel. This can be solved by redeploying the organization on the Vercel account (you might need to make a new account) and updating domain redirects on NameCheap to go to the new Vercel deployment site.


## To update Exec:
1) Navigate to the `public/exec` folder
2) Create a new folder titled `"20(start year)-20(start year + 1)_exec"`and enter this folder
4) Add square high resolution colored photos for each person on exec
5) Create a json called `exec_info.json` and fill it with the exec information for the upcoming year. The format is shown below. 
Note: imageSource should just be the name of the image in the same folder as the json file. The actual link is calculated in the code:
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
6) The website should show the most recent year on the first page and all exec on the page `/pastexec`.

## To add a new initiative:
1) Add a new `(initiative)-icon.svg` logo to `public/icons`, and `(initiative)-backdrop.svg` to `public/backdrops`
2) Add a name and gradient in the `$initiatives` variable in `globals.scss` 
3) Add the initiative information in `initiative_data` from `@components/util/constants.tsx`
4) Create a page for the initiative in app/router, you can copy an existing one as a template
5) Customize the page

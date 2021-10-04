# My DevOps journey
[Link here](https://geofflac.github.io/DevOps_ShowAndTell/) if you prefer a web page to read this README.md
## Introduction
The plan for this project is to integrate CI/CD features to our workflow.\
This project continue the one started during the PC2 where we built a full stack web app **EXPAT$**. [Link here](https://github.com/Geofflac/Expat-app.git) for the Github repository.\
Given the time constrain (1 week), and not having prior experience in this field i  use an **AGILE** approached by defining **SPRINTS** to implement few features at a time.\
The ultimate target for this project is to **learn as much as possible**.
## Sprint 1
To manage this project, I use **FLYING DONUT** to define the different sprints. [Link here](https://www.flyingdonut.io/app/projects/6153151c9de309156d9d77db) to see the project dashboard.\
I also create a repository on **GITHUB**. [Link here](https://github.com/Geofflac/DevOps_ShowAndTell.git).\
I use the feature of Flying Donut to connect the project to the GitHub repository. By doing so, each **CARD** define Flying Donut appears as an **ISSUE** in GitHub. Once the card is placed in a sprint, the label of the issue is changed accordingly.\
  \
<img src="https://user-images.githubusercontent.com/91649093/135460005-eed7ab68-c8ba-4e17-aa32-e77ad3b6b18b.png" width="450"><img src="https://user-images.githubusercontent.com/91649093/135460045-00ab9d50-5bb1-43fa-9998-72240a2fbce1.png" width="450">\
  \
The issues in the GitHub repository can be used to if a **GitHub Project** is open. This project features is a duplicate of the Flying Donut. It will not be used for this project.\
  \
![image](https://user-images.githubusercontent.com/91649093/135460926-da6f4487-dfa2-4f26-a112-d9f9cd2f34df.png)
  \
I put a general view that represent the connection between the different tools at each sprint.\
  \
![image](https://user-images.githubusercontent.com/84672157/135807248-77facd62-55f3-4a5e-8480-dd5c7dd2a37c.png)
## Sprint 2
For this sprint, the target is to deploy some web static pages using **GOOGLE CLOUD**. I decided to not choose the full stack application at first to keep it easier at the beginning.
To do so, I use **VISUAL STUDIO CODE** to clone the GitHub repository and use the **PULL/PUSH** method to implement code from the local machine to the remote repository.
To deploy the static website, I followed the following steps : [Hosting static website](https://cloud.google.com/storage/docs/hosting-static-website)
It uses the module **CLOUD STORAGE => BROWSER** from Google cloud. It creates a public bucket where the files are uploaded are made accessible by an URL.
I deploy :
 - Hello world page for a first test. [https://storage.googleapis.com/hello_world_devops/index.html](https://storage.googleapis.com/hello_world_devops/index.html). 
 - The static version of the EXPAT$ app. [https://storage.googleapis.com/expats_static/index.html](https://storage.googleapis.com/expats_static/index.html)
Here is the updated general view:\
  \
![image](https://user-images.githubusercontent.com/84672157/135807397-c70620ea-2477-4e37-94ae-9d0a6d0c8f85.png)
## Sprint 3
The target for the sprint is to install CI features to our workflow and automate some actions.
 1. The first feature is the greeting for new contributor for on the repository, a new issue or pull request triggers this **ACTION** (GitHub module) and reply automatically to the person how generate the request.\
  \
<img src="https://user-images.githubusercontent.com/91649093/135459076-6c6963c3-0e7d-44c0-a618-fa64c5396271.png" width="800">
2. I use **IFTTT** app as well to link automatically any new commit on the repository to a telegram message on a dedicated chat group.\
  \
<img src="https://user-images.githubusercontent.com/91649093/135428593-d1a48ae7-20a9-418b-bdd8-1766dcc3b3e2.png" width="400"><img src="https://user-images.githubusercontent.com/91649093/135428710-b6faa798-be59-4425-be01-d711f3c5eccb.png" width="400">
3. Another added feature is **CODACY**. This app is able to check the code quality for any new commit and pull request. For pull request, Codacy is able to display the issue and even provide recommendation to rectify it.\
  \
![image](https://user-images.githubusercontent.com/91649093/135552614-0d280ed0-aa9b-44ba-bbe3-537b4530549e.png)\
  \
There is also a badge that can be put in the README to indicate the code quality.
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/c3ba75c0a0fd4bc987eae871156f7f5d)](https://www.codacy.com/gh/Geofflac/DevOps_ShowAndTell/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Geofflac/DevOps_ShowAndTell&amp;utm_campaign=Badge_Grade)\
  \
The strength of those app like Codacy of IFTTT is that NO CODING was required to implement them!\
Here is the general view updated\
![image](https://user-images.githubusercontent.com/84672157/135807600-fa12dd8a-e106-4f8c-87ba-459accce1b81.png)


# FE-Andros-News

FE-Andros-News is a frontend application that allows users to interact with the Andros-News API through a user-friendly interface.

## Table of Contents

- [Link to Deployed Version](#link-to-deployed-version)
- [Link to Backend API Repository](#link-to-backend-api-repository)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
- [Technologies Used](#technologies-used)

## Link to Deployed Version

You can access the deployed version of FE-Andros-News [here](https://your-deployed-app-url.com).

## Link to Backend API Repository

The backend API repository for this project can be found [here](https://github.com/TennoAndros/BE-Andros-News).

## Features

The Andros News App includes the following features and functionality:

### Articles

- **Global Header**: The application features a functional search bar to search for articles and a user section where users can log in or sign up.
- **Global Newsletter & Footer**: Users can subscribe to newsletters and access links to social media and the developer's GitHub profile.
- **Home Page**: The home page displays article cards containing the article image, title, topic, author, and date. Articles are divided into three sections:

  1. **Popular Articles**: These are the most voted articles displayed using a swiper. Users can easily swipe through the popular articles.

  2. **Articles**: In this section, users can see some of the articles. By clicking on the "Articles" heading, they can access a page displaying all articles.

  3. **Topics**: This section shows random articles related to various topics. Additionally, there is a separate section showing articles that were added recently.

- **Sorting and Filtering**: Users can sort articles based on various criteria such as title, topic, author, date, votes, and comment count. They can also choose to show articles of a specific topic only.
- **Pagination**: The list of articles is initially limited to 15, with a "Load More" button at the bottom of the page to load additional articles.
- **Article Page**: When an article card is selected, users are redirected to the article page displaying the full article, the author, author avatar, article image, body, number of votes, and a list of comments.
- **Posting Articles**: Logged-in users can post new articles.

### Comments

- **Displaying Comments**: Comments are displayed on the related article's page.
- **Posting and Deleting Comments**:Logged in users can post comments on articles, and they can delete their own comments.

### Votes

- **Displaying Votes**: The application displays the number of votes for each article and comment.
- **Voting**: Logged in users can upvote or downvote articles and comments.

## Installation Instructions

### Prerequisites

- Node.js (v18.16.0 or later) must be installed on your system.

### Setup

1. Clone the repository:

```bash
git clone https://github.com/TennoAndros/FE-Andros-News.git
cd FE-Andros-News
```

2. Install dependencies:

```bash
npm i
```

3. Launch the application in your browser::

```bash
npm run dev
```

## Technologies Used

The FE-Andros-News app was created using the following technologies:

- [React](https://react.dev/): JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): Fast build tool and development server.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.

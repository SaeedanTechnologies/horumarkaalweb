import styled from 'styled-components'
export const Main=styled.div`


/* Blog List Css Start */
.blog_list_story {
  margin-bottom: 50px;
}

.blog_list_main {
  position: relative;
}

.blog_list_main > .container > .row {
  align-items: center;
}

.blog_list_main .blog_img {
  position: relative;
}

.blog_list_main .blog_img img {
  max-width: 100%;
  border-radius: 12px;
}

.blog_list_main .blog_img span {
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 14px;
  color: var(--text-white);
}

.blog_list_main .blog_text .section_title {
  text-align: left;
}

.blog_list_main .blog_text .choice_badge {
  font-size: 12px;
  background-color: #F8D979;
  display: inline-block;
  padding: 1px 10px;
  border-radius: 4px;
  color: var(--dark-purple);
  font-weight: 700;
  margin-bottom: 10px;
}

.blog_list_main .blog_text a {
  color: var(--purple);
  margin-top: 25px;
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
}

.blog_list_main .blog_text a:hover {
  text-decoration: underline;
}

.blog_list_story.row_am {
  padding-top: 30px;
}

.blog_list_story .story_box {
  margin-bottom: 40px;
  text-align: left;
}

/* Pagination Css Start */
.pagination_block ul {display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.pagination_block ul li:not(:first-child , :last-child) a {margin: 0 5px;
  transition: .4s all;
  display: block;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border-radius: 50px;
  text-align: center;
  line-height: 35px;
}

.pagination_block ul li:first-child {
  margin-right: 20px;
}

.pagination_block ul li:last-child {
  margin-left: 20px;
}

.pagination_block ul li:not(:first-child , :last-child) a:hover , .pagination_block ul li:not(:first-child , :last-child) a.active {
  background-color: var(--bg-purple);
  color: var(--text-white);
}

.pagination_block ul li:first-child a:hover {
  color: var(--purple);
}

.pagination_block ul li:last-child  a:hover {
  color: var(--purple);
}





`
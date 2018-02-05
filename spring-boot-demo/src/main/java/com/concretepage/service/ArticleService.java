package com.concretepage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.concretepage.dao.IArticleDAO;
import com.concretepage.entity.Article;

public class ArticleService implements IArticleService {
	
	private @Autowired IArticleDAO articleDAO;

	@Override
	public List<Article> getAllArticles() {
		return articleDAO.getAllArticles();
	}

	@Override
	public Article getArticleById(int articleId) {
		return articleDAO.getArticleById(articleId);
	}

	@Override
	public boolean createArticle(Article article) {
		if(articleDAO.articleExists(article.getTitle(), article.getCategory())) {
			return false;
		}else {
			articleDAO.createArticle(article);
			return false;
		}
	}

	@Override
	public void updateArticle(Article article) {
		articleDAO.updateArticle(article);
	}

	@Override
	public void deleteArticle(int articleId) {
		articleDAO.deleteArticle(articleId);
	}

}

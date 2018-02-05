package com.concretepage.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concretepage.dao.IArticleDAO;
import com.concretepage.entity.Article;

@Service
public class ArticleService implements IArticleService {
	
	private @Autowired IArticleDAO articleDAO;

	@Override
	public List<Article> getAllArticles() {
		List<Article> allArticles = articleDAO.getAllArticles();
		Collections.sort(allArticles, new Comparator<Article>() {

			@Override
			public int compare(Article o1, Article o2) {
				return o1.getArticleId().compareTo(o2.getArticleId());
			}
		});
		
		return allArticles;
	}

	@Override
	public Article getArticleById(int articleId) {
		return articleDAO.getArticleById(articleId);
	}

	@Override
	public synchronized boolean createArticle(Article article) {
		if(articleDAO.articleExists(article.getTitle(), article.getCategory())) {
			return false;
		}else {
			articleDAO.createArticle(article);
			return true;
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

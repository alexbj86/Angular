package com.concretepage.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.concretepage.entity.Article;

@Transactional
@Repository
public class ArticleDAO implements IArticleDAO {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<Article> getAllArticles() {
		String hql = "FROM Article as atcl ORDER BY atcl.articleId DESC";
		return (List<Article>) entityManager.createQuery(hql).getResultList();
	}

	@Override
	public Article getArticleById(int articleId) {
		return entityManager.find(Article.class, articleId);
	}

	@Override
	public void createArticle(Article article) {
		entityManager.persist(article);
	}

	@Override
	public void updateArticle(Article article) {
		Article artcl = getArticleById(article.getArticleId());
		artcl.setTitle(article.getTitle());
		artcl.setCategory(article.getCategory());
		entityManager.flush();
	}

	@Override
	public void deleteArticle(int articleId) {
		entityManager.remove(getArticleById(articleId));
	}

	@Override
	public boolean articleExists(String title, String category) {
		String hql = "FROM Article as atcl WHERE atcl.title = ? AND atcl.category = ?";
		int count = entityManager.createQuery(hql).setParameter(1, title).setParameter(2, category).getResultList().size();
		
		return count > 0 ? true : false;
	}

}

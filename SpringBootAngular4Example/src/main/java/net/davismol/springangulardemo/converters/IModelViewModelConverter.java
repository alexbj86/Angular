package net.davismol.springangulardemo.converters;

import java.util.List;

public interface IModelViewModelConverter<M, VM> {

	M fromViewModel(VM vm);
	
	List<M> fromViewModelList(List<VM> vmList);
	
	VM toViewModel(M m);
	
	List<VM> toViewModelList(List<M> mList);
}

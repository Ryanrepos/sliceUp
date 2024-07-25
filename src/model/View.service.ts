import ViewModel from "../schema/View.model";

class ViewService {
  private readonly viewModel;

  constructor() {
    // This is schema model
    this.viewModel = ViewModel;
  }
}

export default ViewService;

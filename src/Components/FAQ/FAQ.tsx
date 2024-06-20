const FAQPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">What is Wardrobe Web App?</h2>
          <p className="text-gray-700">
            Wardrobe Web App is a platform that helps users organize their clothing items digitally, allowing them to create virtual wardrobes, plan outfits, and track their fashion preferences.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">How do I add items to my virtual wardrobe?</h2>
          <p className="text-gray-700">
            You can add items to your virtual wardrobe by uploading photos of your clothing items or manually entering details such as item type, color, and brand.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Is Wardrobe Web App free to use?</h2>
          <p className="text-gray-700">
            Yes, Wardrobe Web App offers a free version with basic features. However, we also offer premium plans with additional features and benefits.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">How do I contact support?</h2>
          <p className="text-gray-700">
            You can contact our support team by sending an email to support@wardrobewebapp.com. Our team will respond to your inquiry as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;

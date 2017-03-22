require "sinatra"
require "json"

pies = [
  {
    "id": 1,
    "name": "Key Lime Pie",
    "image": "https://farm9.staticflickr.com/8672/16095153018_c5a830745e_z.jpg",
    "created_at": "2017-02-01T21:35:24.764Z",
    "updated_at": "2017-02-01T21:35:24.764Z",
    "reviews": [
      {
        "id": 1,
        "rating": 4,
        "body": "Great pie but it's no sweet potato"
      },
      {
        "id": 2,
        "rating": 5,
        "body": "I think anything that tastes like lime is the best. But then again, I've never tried sweet potato pie. So I probably don't know any better."
      }
    ]
  },
  {
    "id": 2,
    "name": "Sweet Potato Pie",
    "image": "http://3.bp.blogspot.com/-ibzH-GZhPk0/WGLTF5Zrj-I/AAAAAAAAijM/GZTEEOHj7xgJTweOTig1Jas7_ap4Vm8hACK4B/s1600/df148ca77042a17df1086e7d49fed09813807355.jpg",
    "created_at": "2017-02-01T21:35:24.768Z",
    "updated_at": "2017-02-01T21:35:24.768Z",
    "reviews": [
      {
        "id": 3,
        "rating": 5,
        "body": "Food of the gods."
      },
      {
        "id": 4,
        "rating": 5,
        "body": "The pie all other pies dream of being."
      },
      {
        "id": 5,
        "rating": 5,
        "body": "This isn't just the best pie in the world. It's the best food in the world."
      }
    ]
  },
  {
    "id": 3,
    "name": "Apple Pie",
    "image": "https://i1.wp.com/blog.marleyspoon.com/wp-content/uploads/2016/09/pie.jpg?w=640",
    "created_at": "2017-02-01T21:35:24.771Z",
    "updated_at": "2017-02-01T21:35:24.771Z",
    "reviews": [
      {
        "id": 6,
        "rating": 3,
        "body": "If you can't get your hands on a sweet pot pie, you can't go wrong with apple pie."
      },
      {
        "id": 7,
        "rating": 4,
        "body": "Apple pie is always worth it for the double crust."
      },
      {
        "id": 8,
        "rating": 3,
        "body": "Pretty soid."
      }
    ]
  },
  {
    "id": 4,
    "name": "Coconut Cream Pie",
    "image": "http://ashleemarie.com/wp-content/uploads/2014/12/coconut-cream-pie-recipe.jpg",
    "created_at": "2017-02-01T21:35:24.774Z",
    "updated_at": "2017-02-01T21:35:24.774Z",
    "reviews": [
      {
        "id": 9,
        "rating": 3,
        "body": "I guess if you don't have sweet potato pie and you don't have key lime pie, this is my go to."
      },
      {
        "id": 10,
        "rating": 3,
        "body": "This is great."
      },
      {
        "id": 11,
        "rating": 1,
        "body": "WHAT IS THIS? WHERE IS MY SWEET POTATO PIE?!?!"
      }
    ]
  }
]

get "/api/v1/pies" do
  pies.to_json
end

get "/api/v1/pies/:id" do |id|
  pies.find { |pie| pie[:id] == id.to_i }.to_json
end

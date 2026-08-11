const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyId: {
      type: String,
      required: true,
      unique: true,
    },

    companyName: {
      type: String,
      required: true,
    },

    businessType: {
      type: String,
      required: true,
    },

    receptionistName: {
      type: String,
      required: true,
    },

    expertName: String,
 

    // services: {
    //   type: [String],
    //   default: [],
    // },

    // products: {
    //   type: [String],
    //   default: [],
    // },

    website: {
      type: String,
      default: "",
    },
     businessHours: {
    monday: {
      open: String,
      close: String,
      closed: {
        type: Boolean,
        default: false,
      },
    },

    tuesday: {
      open: String,
      close: String,
      closed: {
        type: Boolean,
        default: false,
      },
    },

    wednesday: {
      open: String,
      close: String,
      closed: {
        type: Boolean,
        default: false,
      },
    },

    thursday: {
      open: String,
      close: String,
      closed: {
        type: Boolean,
        default: false,
      },
    },

    friday: {
      open: String,
      close: String,
      closed: {
        type: Boolean,
        default: false,
      },
    },

    saturday: {
      open: String,
      close: String,
      closed: {
        type: Boolean,
        default: false,
      },
    },

    sunday: {
      open: String,
      close: String,
      closed: {
        type: Boolean,
        default: true,
      },
    },
  },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);